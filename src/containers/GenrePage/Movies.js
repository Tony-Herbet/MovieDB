import { connect } from 'react-redux';
import Movies from '../../components/GenrePage/Movies';
import { saveMovieChoice } from '../../actions/genrePage';

// === mapStateToProps
const mapStateToProps = () => ({

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  saveMovieChoice: (movie) => {
    dispatch(saveMovieChoice(movie));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
