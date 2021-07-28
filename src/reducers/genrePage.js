import { SAVE_GENRE_MOVIES_LIST } from '../actions/genrePage';

const initialState = {
  // list of the movies from the genre choose by the user
  moviesList: [],
};

const genrePage = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GENRE_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.moviesList,
      };

    default: return state;
  }
};
export default genrePage;
