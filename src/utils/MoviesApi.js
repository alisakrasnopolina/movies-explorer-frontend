class MoviesApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  }

  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res))
  }
}

const movieApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default movieApi;