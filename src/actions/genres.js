// === action types
export const FETCH_GENRES = 'FETCH_GENRES';
export const SAVE_GENRES = 'SAVE_GENRES';
export const SAVE_GENRE_CHOICE = 'SAVE_GENRE_CHOICE';

// === action creators
export const fetchGenres = () => ({
  type: FETCH_GENRES,
});

export const saveGenres = (list) => ({
  type: SAVE_GENRES,
  list,
});

export const saveGenreChoice = (id) => ({
  type: SAVE_GENRE_CHOICE,
  id,
});
