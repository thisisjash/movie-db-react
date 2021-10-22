// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

// API URL is the base URL for all the API requests...
// So we made it into a constant variable...
const API_URL = 'https://api.themoviedb.org/3/';

// We get our sensitive API Key from .env file using below Variable...
const API_KEY = process.env.REACT_APP_API_KEY;


// Here we are just formatting API requests for posting Search Query according to the Documentation from
// https://developers.themoviedb.org/3/search/search-movies
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

// // Here we are just formatting API request for getting Popular Titles according to the Documentation from
// https://developers.themoviedb.org/3/movies/get-popular-movies
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

// The Below Variables just Specifies the Attributes of the Movie Posters being Displayed
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
