import { connect } from 'react-redux';
import MoviesThumbnail from 'src/components/MoviesThumbnail';
import { saveMovieChoice } from 'src/actions/genrePage';

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
