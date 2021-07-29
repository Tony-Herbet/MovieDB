import {
  DISPLAY_LOADER,
  HIDE_LOADER,
  UPDATE_SEARCHBAR_VALUE,
  REDIRECT_ON,
  REDIRECT_OFF,
  CLEAN_SEARCHBAR,
  SAVE_PREVIOUS_SEARCH,
} from 'src/actions/utils';

const initialState = {
  // bool use to display the Loader component
  loading: true,
  // input value of the search bar
  searchBar: '',
  // bool use to redirect the user
  redirect: false,
  // save the previous search made by the user
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
