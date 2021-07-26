import { combineReducers } from 'redux';
import genresReducer from './genres';

const rootReducer = combineReducers({
  genres: genresReducer,
});

export default rootReducer;
