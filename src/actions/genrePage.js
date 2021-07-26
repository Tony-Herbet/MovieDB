// === action types
export const FETCH_GENRE_MOVIES_LIST = 'FETCH_GENRE_MOVIES_LIST';
export const SAVE_GENRE_MOVIES_LIST = 'SAVE_GENRE_MOVIES_LIST';

// === action creators
export const fetchGenreMoviesList = (choiceId) => ({
  type: FETCH_GENRE_MOVIES_LIST,
  choiceId,
});

export const saveGenreMoviesList = (moviesList) => ({
  type: SAVE_GENRE_MOVIES_LIST,
  moviesList,
});
