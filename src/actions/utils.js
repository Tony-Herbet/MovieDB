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
// Change a bool to display a Loader when an API request is made
export const displayLoader = () => ({
  type: DISPLAY_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

// Update input value to have a controlled component
export const updateSearchBarValue = (value) => ({
  type: UPDATE_SEARCHBAR_VALUE,
  value,
});

// Clean input value in state
export const cleanSearchBar = () => ({
  type: CLEAN_SEARCHBAR,
});

// Save input value after form is sumbit so it can be display
export const savePreviousSearch = (value) => ({
  type: SAVE_PREVIOUS_SEARCH,
  value,
});

// API request using search bar input value
export const searchMovie = (value) => ({
  type: SEARCH_MOVIE,
  value,
});

// Save API response from search
export const saveSearchedMovie = (searchedList) => ({
  type: SAVE_SEARCHED_MOVIE,
  searchedList,
});

// Change a bool after user make a search
// The bool is then used to display Redirect component from react-router-dom which redirect the user
export const redirectOn = () => ({
  type: REDIRECT_ON,
});

export const redirectOff = () => ({
  type: REDIRECT_OFF,
});
