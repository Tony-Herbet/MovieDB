import {
  DISPLAY_LOADER,
  HIDE_LOADER,
  UPDATE_SEARCHBAR_VALUE,
} from '../actions/utils';

const initialState = {
  loading: true,
  searchBar: '',
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

    default: return state;
  }
};

export default utils;
