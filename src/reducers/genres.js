import { SAVE_GENRES, SAVE_GENRE_CHOICE } from '../actions/genres';

const initialState = {
  list: [],
  choiceId: 0,
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
        choiceId: action.id,
      };

    default: return state;
  }
};
export default genres;
