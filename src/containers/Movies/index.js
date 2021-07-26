import { connect } from 'react-redux';
import Movies from '../../components/Movies';

// === mapStateToProps
const mapStateToProps = (state) => ({
  searchedList: state.search.searchedList,
  loading: state.utils.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
