import { SAVE_GENRES, SAVE_GENRE_CHOICE } from 'src/actions/genres';

const initialState = {
  // List of the genres
  list: [],
  // id of the genre choose by the user
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
