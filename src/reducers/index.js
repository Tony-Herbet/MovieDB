import { combineReducers } from 'redux';
import genresReducer from './genres';
import utilsReducer from './utils';

const rootReducer = combineReducers({
  genres: genresReducer,
  utils: utilsReducer,
});

export default rootReducer;
