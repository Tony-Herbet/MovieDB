import {
  DISPLAY_LOADER,
  HIDE_LOADER,
} from '../actions/utils';

const initialState = {
  loading: true,
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

    default: return state;
  }
};

export default utils;
