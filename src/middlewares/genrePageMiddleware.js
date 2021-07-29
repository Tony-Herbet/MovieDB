import axios from 'axios';

import { FETCH_GENRE_MOVIES_LIST, saveGenreMoviesList } from 'src/actions/genrePage';
import { hideLoader } from 'src/actions/utils';
import apiKey from 'src/utils';

const genresMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // API request for the genre movies list
    case FETCH_GENRE_MOVIES_LIST: {
      const { choiceId } = action;
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${choiceId}&with_watch_monetization_types=flatrate
      `)
        .then((response) => {
          // dispatch to save the genre movies list
          store.dispatch(saveGenreMoviesList(response.data.results));
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
