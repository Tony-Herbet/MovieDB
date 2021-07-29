import { connect } from 'react-redux';
import Genres from 'src/components/Genres';
import { fetchGenres } from 'src/actions/genres';

// === mapStateToProps
const mapStateToProps = (state) => ({
  list: state.genres.list,
  loading: state.utils.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  fetchGenres: () => {
    dispatch(fetchGenres());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
