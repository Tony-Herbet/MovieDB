import { connect } from 'react-redux';
import GenrePage from '../../components/GenrePage';
import { fetchGenreMoviesList } from '../../actions/genrePage';
import { displayLoader } from '../../actions/utils';

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
