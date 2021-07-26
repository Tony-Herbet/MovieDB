import React from 'react';
import { useParams } from 'react-router';

const GenrePage = () => {
  const { slug } = useParams();
  return (
    <div>
      {slug}
    </div>
  );
};

export default GenrePage;
