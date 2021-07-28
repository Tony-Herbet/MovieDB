// === action types
// API request for a genre movies
export const FETCH_GENRE_MOVIES_LIST = 'FETCH_GENRE_MOVIES_LIST';
// Save API response in state
export const SAVE_GENRE_MOVIES_LIST = 'SAVE_GENRE_MOVIES_LIST';
// Save movie clicked by user
export const SAVE_MOVIE_CHOICE = 'SAVE_MOVIE_CHOICE';

// === action creators
// API request for a genre movies
export const fetchGenreMoviesList = (choiceId) => ({
  type: FETCH_GENRE_MOVIES_LIST,
  choiceId,
});

// Save API response in state
export const saveGenreMoviesList = (moviesList) => ({
  type: SAVE_GENRE_MOVIES_LIST,
  moviesList,
});

// Save movie clicked by user
export const saveMovieChoice = (movie) => ({
  type: SAVE_MOVIE_CHOICE,
  movie,
});
