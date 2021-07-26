import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import Loader from '../Loader';

const GenrePage = ({
  loading,
  fetchGenreMoviesList,
  choiceId,
  displayLoader,
}) => {
  useEffect(() => {
    displayLoader();
    fetchGenreMoviesList(choiceId);
  }, []);
  const { slug } = useParams();
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          {slug}
        </div>
      )}
    </>
  );
};

GenrePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchGenreMoviesList: PropTypes.func.isRequired,
  choiceId: PropTypes.number.isRequired,
  displayLoader: PropTypes.func.isRequired,
};

export default GenrePage;
