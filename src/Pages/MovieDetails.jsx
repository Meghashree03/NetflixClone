import React, { Suspense } from 'react';


const SinglePage = React.lazy(() => import('../Components/Watch/SinglePage'));

const MovieDetails = () => {
  return (
    <div>
     
      <Suspense fallback={<div>Loading Movie Details...</div>}>
        <SinglePage />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
