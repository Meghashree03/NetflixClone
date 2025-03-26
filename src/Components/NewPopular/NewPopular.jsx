import React from "react";
import "./newpopular.css"; // Your custom CSS
import { trending, recommended } from "../../Data/Movie";

const NewPopular = () => {
  const combinedMovies = [...trending, ...recommended];

  return (
    <div className="movie-page">
      <h1 className="page-title">New and Popular</h1>
      <div className="movie-grid">
        {combinedMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={movie.cover}
              className="movie-image"
              alt={movie.name}
            />
            <div className="movie-info">
              <h2>{movie.name}</h2>
              <p><strong>Rating:</strong> {movie.rating}</p>
              <p><strong>Genre:</strong> {movie.genres}</p>
              <p><strong>Description:</strong> {movie.desc}</p>
               
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPopular;
