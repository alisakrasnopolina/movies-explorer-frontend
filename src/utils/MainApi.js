class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._error = '';
  }

  _getResponseData(res) {
    return res.ok ? res.json() : res.json().then(res => Promise.reject(`${res.message}`));
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include'
    })
      .then(res => this._getResponseData(res))
  }

  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(res => this._getResponseData(res))
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include'
    })
      .then(res => this._getResponseData(res))
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'
    })
    .then(res => this._getResponseData(res))
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId}) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId
      })
    })
    .then((response) => this._getResponseData(response))
    .then((res) => {
      return res;
    })
  };

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then((response) => this._getResponseData(response))
    .then((res) => {
      return res;
    })
  };  
  
  authorization(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((res) => this._getResponseData(res))
    .then((data) => {
      localStorage.setItem('Authorized', 'true');
      return data;
    })
  }; 
  
  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
      }
    })
    .then((res) => this._getResponseData(res))
    .then(data => data)
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((res) => this._getResponseData(res))
  }; 
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-explorer.alisa.nomoredomains.rocks',
  // baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;