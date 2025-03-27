import React from "react";
import Movie from "../Components/MoviePage/Movie";

const MemoizedMovie = React.memo(Movie);

const MoviePage = () => {
  return (
    <div>
      <MemoizedMovie />
    </div>
  );
};

export default MoviePage;
