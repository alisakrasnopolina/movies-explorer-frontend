import React, { useCallback, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [moviesForList, setMoviesForList] = React.useState([]);
  const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isFilterOn, setFilter] = React.useState(false);

  useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      const filter = JSON.parse(localStorage.getItem("isMoviesFilterOn"));
      setFilter(filter);
      const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
      setFoundMovies(foundMovies);
      if (!foundMovies.length) {
        setMoviesNotFound(true);
        setMoviesForList(foundMovies);
      } else {
        const filtered = handleMoviesFiltering(foundMovies, filter, false);
        setMoviesForList(filtered);
        if (!filtered.length) {
          setMoviesNotFound(true);
        }
      }
    }
  }, []);

  function handleMoviesSearch(movies, searchName, isSavedMovies) {
    const normalizeSearchName = searchName.toLowerCase().trim();
    const result = movies.filter((movie) => {
      const normalizeNameRu = movie.nameRU.toLowerCase().trim();
      const normalizeNameEn = movie.nameEN.toLowerCase().trim();
      return (
        normalizeNameRu.includes(normalizeSearchName) || normalizeNameEn.includes(normalizeSearchName)
      );
    });
    if (!isSavedMovies) {
      localStorage.setItem("foundMovies", JSON.stringify(result));
      localStorage.setItem("moviesSearchName", normalizeSearchName);
    } else {
      localStorage.setItem("savedMoviesSearchName", normalizeSearchName);
    }
    return result;
  }

  function handleMoviesFiltering(movies, isFilterOn, isSavedMovies) {
    if (!isSavedMovies) {
      localStorage.setItem("isMoviesFilterOn", isFilterOn);
    } else {
      localStorage.setItem("isSavedMoviesFilterOn", isFilterOn);
    }
    if (isFilterOn) {
      const result = movies.filter((movie) => movie.duration <= 40);
      return result;
    } else {
      return movies;
    }
  }

  const handleSearchAndFiltering = useCallback(
    (movies, searchName) => {
      const found = handleMoviesSearch(movies, searchName, false);
      setFoundMovies(found);
      if (!found.length) {
        setMoviesNotFound(true);
        setIsSearching(false);
        setMoviesForList(found);
      } else {
        const filtered = handleMoviesFiltering(found, isFilterOn, false);
        setIsSearching(false);
        setMoviesForList(filtered);
        if (!filtered.length) {
          setIsSearching(false);
          setMoviesNotFound(true);
        }
      }
    },
    [isFilterOn]
  );

  const handleSearchSubmit = useCallback(
    async (searchName) => {
      setIsSearching(true);
      setMoviesNotFound(false)
      if (!initialMovies.length) {
        const moviesData = await props.onSearch();
        if (moviesData) {
          setInitialMovies(moviesData);
          handleSearchAndFiltering(moviesData, searchName);
        }
      } else {
        handleSearchAndFiltering(initialMovies, searchName);
      }
    },
    [handleSearchAndFiltering, initialMovies, props.onSearch]
  );

  const handleFilterClick = useCallback(
    (isChecked) => {
      setFilter(isChecked);
      setMoviesNotFound(false);
      const filtered = handleMoviesFiltering(foundMovies, isChecked, false);
      setMoviesForList(filtered);
      if (!filtered.length) {
        setMoviesNotFound(true);
      }
    },
    [foundMovies]
  );

  return (
    <main className="content">
      <SearchForm onSubmit={handleSearchSubmit} isSearching={isSearching} onFilterChange={handleFilterClick} isFilterOn={isFilterOn} />
      <MoviesCardList movies={moviesForList} moviesNotFound={moviesNotFound} searchError={props.searchError} isLoading={props.isLoading} onMovieSave={props.onMovieSave} onMovieDelete={props.onMovieDelete} savedMovies={props.savedMovies} />
    </main>
  );
}

export default Movies;