import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import genresMiddleware from '../middlewares/genresMiddleware';
import reducer from '../reducers/index';

const enhancers = composeWithDevTools(
  applyMiddleware(
    genresMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
