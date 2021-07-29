import axios from 'axios';

import { FETCH_GENRES, saveGenres } from '../actions/genres';
import { hideLoader } from '../actions/utils';
import apiKey from '../utils';

const genresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // API request for the genres list
    case FETCH_GENRES: {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((response) => {
          // dispatch to save the genres list
          store.dispatch(saveGenres(response.data.genres));
        })
        .catch(() => {

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
