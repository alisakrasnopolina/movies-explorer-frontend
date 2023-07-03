import React, { useCallback, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

  const [moviesForList, setMoviesForList] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isFilterOn, setFilter] = React.useState(false);
  const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);

  useEffect(() => {
    setMoviesForList(props.savedMovies);
  }, [props.savedMovies])

  useEffect(() => {
    setMoviesNotFound(false);
    if (
      localStorage.getItem("savedMoviesSearchName") &&
      localStorage.getItem("isSavedMoviesFilterOn")
    ) {
      const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
      setFilter(filter);
      const searchName = localStorage.getItem("savedMoviesSearchName");
      const found = handleMoviesSearch(props.savedMovies, searchName, true);
      setFilteredMovies(found);
      if (!found.length) {
        setMoviesNotFound(true);
        setMoviesForList(found);
      } else {
        const filtered = handleMoviesFiltering(found, filter, true);
        setMoviesForList(filtered);
        if (!filtered.length) {
          setMoviesNotFound(true);
        }
      }
    } else if (
      !localStorage.getItem("savedMoviesSearchName") &&
      localStorage.getItem("isSavedMoviesFilterOn")
    ) {
      setFilteredMovies(props.savedMovies);
      const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
      setFilter(filter);
      const filtered = handleMoviesFiltering(props.savedMovies, filter, true);
      setMoviesForList(filtered);
      if (!filtered.length) {
        setMoviesNotFound(true);
      }
    } else {
      setMoviesForList(props.savedMovies);
      setFilteredMovies(props.savedMovies);
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

  const handleSearchSubmit = useCallback(
    (searchName) => {
      setMoviesNotFound(false);
      setIsSearching(true);
      if (props.savedMovies.length) {
        const found = handleMoviesSearch(props.savedMovies, searchName, true);
        setFilteredMovies(found);
        if (!found.length) {
          setMoviesNotFound(true);
          setIsSearching(false);
          setMoviesForList(found);
        } else {
          const filtered = handleMoviesFiltering(found, isFilterOn, true);
          setIsSearching(false);
          setMoviesForList(filtered);
          if (!filtered.length) {
            setIsSearching(false);
            setMoviesNotFound(true);
          }
        }
      } else {
        setIsSearching(false);
        setMoviesNotFound(true);
      }
    },
    [props.savedMovies, isFilterOn]
  );

  const handleFilterClick = useCallback(
    (isChecked) => {
      setFilter(isChecked);
      setMoviesNotFound(false);
      const filtered = handleMoviesFiltering(filteredMovies, isChecked, true);
      setMoviesForList(filtered);
      if (!filtered.length) {
        setMoviesNotFound(true);
      }
    },
    [filteredMovies]
  );

  return (
    <main className="content">
      <SearchForm  onSubmit={handleSearchSubmit} isSearching={isSearching} onFilterChange={handleFilterClick} isFilterOn={isFilterOn} />
      <MoviesCardList movies={moviesForList} moviesNotFound={moviesNotFound} onMovieDelete={props.onMovieDelete} savedMovies={props.savedMovies} />
    </main>
  );
}

export default SavedMovies;