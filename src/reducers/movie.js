import { SAVE_MOVIE_CHOICE } from 'src/actions/genrePage';

const initialState = {

};

const Movie = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MOVIE_CHOICE:
      return {
        ...state,
        ...action.movie,
      };

    default: return state;
  }
};
export default Movie;
