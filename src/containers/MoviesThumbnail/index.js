import { connect } from 'react-redux';
import MoviesThumbnail from '../../components/MoviesThumbnail';
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesThumbnail);
