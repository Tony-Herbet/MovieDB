import { combineReducers } from 'redux';
import genresReducer from './genres';
import utilsReducer from './utils';
import genrePageReducer from './genrePage';
import movieReducer from './movie';

const rootReducer = combineReducers({
  genres: genresReducer,
  utils: utilsReducer,
  genrePage: genrePageReducer,
  movie: movieReducer,
});

export default rootReducer;
