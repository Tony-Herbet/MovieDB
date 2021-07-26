// === action types
export const FETCH_GENRES = 'FETCH_GENRES';
export const SAVE_GENRES = 'SAVE_GENRES';

// === action creators
export const fetchGenres = () => ({
  type: FETCH_GENRES,
});

export const saveGenres = (list) => ({
  type: SAVE_GENRES,
  list,
});
