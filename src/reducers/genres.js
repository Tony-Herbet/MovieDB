import { SAVE_GENRES } from '../actions/genres';

const initialState = {
  list: [],
};

const genres = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GENRES:
      return {
        ...state,
        list: action.list,
      };

    default: return state;
  }
};
export default genres;
