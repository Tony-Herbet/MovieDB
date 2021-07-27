// === action types
export const HIDE_LOADER = 'HIDE_LOADER';
export const DISPLAY_LOADER = 'DISPLAY_LOADER';
export const UPDATE_SEARCHBAR_VALUE = 'UPDATE_SEARCHBAR_VALUE';
export const CLEAN_SEARCHBAR = 'CLEAN_SEARCHBAR';
export const SAVE_PREVIOUS_SEARCH = 'SAVE_PREVIOUS_SEARCH';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SAVE_SEARCHED_MOVIE = 'SAVE_SEARCHED_MOVIE';
export const REDIRECT_ON = 'REDIRECT_ON';
export const REDIRECT_OFF = 'REDIRECT_OFF';

// === action creators
export const displayLoader = () => ({
  type: DISPLAY_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const updateSearchBarValue = (value) => ({
  type: UPDATE_SEARCHBAR_VALUE,
  value,
});

export const cleanSearchBar = () => ({
  type: CLEAN_SEARCHBAR,
});

export const savePreviousSearch = (value) => ({
  type: SAVE_PREVIOUS_SEARCH,
  value,
});

export const searchMovie = (value) => ({
  type: SEARCH_MOVIE,
  value,
});

export const saveSearchedMovie = (searchedList) => ({
  type: SAVE_SEARCHED_MOVIE,
  searchedList,
});

export const redirectOn = () => ({
  type: REDIRECT_ON,
});

export const redirectOff = () => ({
  type: REDIRECT_OFF,
});
