import { SAVE_SEARCHED_MOVIE } from '../actions/utils';

const initialState = {
  // list of all the movies matching the user search
  searchedList: [],
};

const search = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SEARCHED_MOVIE:
      return {
        ...state,
        searchedList: action.searchedList,
      };

    default: return state;
  }
};
export default search;
