/* eslint-disable import/order */
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import genresMiddleware from '../middlewares/genresMiddleware';
import genrePageMiddleware from '../middlewares/genrePageMiddleware';
import searchMiddleware from '../middlewares/searchMiddleware';
import reducer from '../reducers/index';

const enhancers = composeWithDevTools(
  applyMiddleware(
    genresMiddleware,
    genrePageMiddleware,
    searchMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
