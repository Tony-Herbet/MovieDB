import { connect } from 'react-redux';
import SearchBar from '../../components/Header/SearchBar';
import { updateSearchBarValue, searchMovie, displayLoader } from '../../actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  value: state.utils.searchBar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  updateSearchBarValue: (value) => {
    dispatch(updateSearchBarValue(value));
  },
  searchMovie: (value) => {
    dispatch(searchMovie(value));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
