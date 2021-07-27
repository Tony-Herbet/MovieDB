import {
  DISPLAY_LOADER,
  HIDE_LOADER,
  UPDATE_SEARCHBAR_VALUE,
  REDIRECT_ON,
  REDIRECT_OFF,
  CLEAN_SEARCHBAR,
  SAVE_PREVIOUS_SEARCH,
} from '../actions/utils';

const initialState = {
  loading: true,
  searchBar: '',
  redirect: false,
  previousSearch: '',
};

const utils = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_LOADER:
      return {
        ...state,
        // change loading to true to hide the loader
        loading: true,
      };

    case HIDE_LOADER:
      return {
        ...state,
        // change loading to false to hide the loader
        loading: false,
      };

    case UPDATE_SEARCHBAR_VALUE:
      return {
        ...state,
        // update the searchbar input field value
        searchBar: action.value,
      };

    case CLEAN_SEARCHBAR:
      return {
        ...state,
        // clear the searchbar input field value
        searchBar: '',
      };

    case SAVE_PREVIOUS_SEARCH:
      return {
        ...state,
        // save the previous search input to be display
        previousSearch: action.value,
      };

    case REDIRECT_ON:
      return {
        ...state,
        redirect: true,
      };

    case REDIRECT_OFF:
      return {
        ...state,
        redirect: false,
      };

    default: return state;
  }
};

export default utils;
