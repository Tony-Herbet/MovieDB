import { combineReducers } from 'redux';
import genresReducer from './genres';
import utilsReducer from './utils';
import genrePageReducer from './genrePage';

const rootReducer = combineReducers({
  genres: genresReducer,
  utils: utilsReducer,
  genrePage: genrePageReducer,
});

export default rootReducer;
