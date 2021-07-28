// === action types
// API request for all the movies genres
export const FETCH_GENRES = 'FETCH_GENRES';
// Save API response in state
export const SAVE_GENRES = 'SAVE_GENRES';
// Save genre clicked by user
export const SAVE_GENRE_CHOICE = 'SAVE_GENRE_CHOICE';

// === action creators
// API request for all the movies genres
export const fetchGenres = () => ({
  type: FETCH_GENRES,
});

// Save API response in state
export const saveGenres = (list) => ({
  type: SAVE_GENRES,
  list,
});

// Save genre clicked by user
export const saveGenreChoice = (id) => ({
  type: SAVE_GENRE_CHOICE,
  id,
});
