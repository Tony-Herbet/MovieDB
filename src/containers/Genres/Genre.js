import { connect } from 'react-redux';
import Genre from '../../components/Genres/Genre';
import { saveGenreChoice } from '../../actions/genres';

// === mapStateToProps
const mapStateToProps = () => ({

});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  saveGenreChoice: (id) => {
    dispatch(saveGenreChoice(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
