import API_KEY from '../constants/api'

const getMovies = query =>
  new Promise((resolve, reject) =>
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject)
  )

const getMovieDetails = imdbID =>
  new Promise((resolve, reject) =>
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(resolve)
      .catch(reject)
  )

export {
  getMovies,
  getMovieDetails,
}
