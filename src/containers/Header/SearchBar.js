import { connect } from 'react-redux';
import SearchBar from 'src/components/Header/SearchBar';
import {
  updateSearchBarValue,
  searchMovie,
  displayLoader,
  redirectOn,
  savePreviousSearch,
} from 'src/actions/utils';

// === mapStateToProps
const mapStateToProps = (state) => ({
  value: state.utils.searchBar,
  redirect: state.utils.redirect,
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
  redirectOn: () => {
    dispatch(redirectOn());
  },
  savePreviousSearch: (value) => {
    dispatch(savePreviousSearch(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
