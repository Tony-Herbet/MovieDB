import { connect } from 'react-redux';
import GenrePage from 'src/components/GenrePage';
import { fetchGenreMoviesList } from 'src/actions/genrePage';
import { displayLoader } from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  moviesList: state.genrePage.moviesList,
  loading: state.utils.loading,
  choiceId: state.genres.choiceId,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchGenreMoviesList: (choiceId) => {
    dispatch(fetchGenreMoviesList(choiceId));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
