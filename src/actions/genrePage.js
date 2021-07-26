// === action types
export const FETCH_GENRE_MOVIES_LIST = 'FETCH_GENRE_MOVIES_LIST';
export const SAVE_GENRE_MOVIES_LIST = 'SAVE_GENRE_MOVIES_LIST';
export const SAVE_MOVIE_CHOICE = 'SAVE_MOVIE_CHOICE';

// === action creators
export const fetchGenreMoviesList = (choiceId) => ({
  type: FETCH_GENRE_MOVIES_LIST,
  choiceId,
});

export const saveGenreMoviesList = (moviesList) => ({
  type: SAVE_GENRE_MOVIES_LIST,
  moviesList,
});

export const saveMovieChoice = (movie) => ({
  type: SAVE_MOVIE_CHOICE,
  movie,
});
