import { connect } from 'react-redux';
import Genre from 'src/components/Genres/Genre';
import { saveGenreChoice } from 'src/actions/genres';

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
