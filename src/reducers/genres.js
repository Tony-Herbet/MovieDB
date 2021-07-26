import { SAVE_GENRES, SAVE_GENRE_CHOICE } from '../actions/genres';

const initialState = {
  list: [],
  choice: 0,
};

const genres = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GENRES:
      return {
        ...state,
        list: action.list,
      };

    case SAVE_GENRE_CHOICE:
      return {
        ...state,
        id: action.id,
      };

    default: return state;
  }
};
export default genres;
