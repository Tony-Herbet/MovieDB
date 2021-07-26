import axios from 'axios';

import { SEARCH_MOVIE, saveSearchedMovie, hideLoader } from '../actions/utils';
import apiKey from '../utils';

const genresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // API request to search a movie
    case SEARCH_MOVIE: {
      const { value } = action;
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}&page=1&include_adult=false`)
        .then((response) => {
          // dispatch to save the genres list
          console.log(response);
          store.dispatch(saveSearchedMovie(response.data.results));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(hideLoader());
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default genresMiddleware;