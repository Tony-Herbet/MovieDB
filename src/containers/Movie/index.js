import { connect } from 'react-redux';
import Movie from '../../components/Movie';

// === mapStateToProps
const mapStateToProps = (state) => ({
  title: state.movie.original_title,
  vote: state.movie.vote_average,
  poster: state.movie.poster_path,
  overview: state.movie.overview,
  release: state.movie.release_date,
  language: state.movie.original_language,
});

// === mapDispatchToProps
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
