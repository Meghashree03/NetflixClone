import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeData, trending, upcome, latest, recommended } from "../../Data/Movie";
import "./moviePage.css";

const Movie = () => {
  const allMovies = [...homeData, ...trending, ...upcome, ...latest, ...recommended];
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Handle add/remove from favorites
  const handleFavoriteToggle = (movie) => {
    let updatedFavorites;
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="movie-page">
      <h1 className="page-title">All Movies</h1>
      <div className="movie-grid">
        {allMovies.map((movie) => {
          const isFavorite = favorites.some((fav) => fav.id === movie.id);
          return (
            <div key={movie.id} className="movie-card">
              <Link to={`/singlePage/${movie.id}`} className="movie-card-link">
                <img src={movie.cover} alt={movie.name} className="movie-image" />
                <div className="movie-info">
                  <h2>{movie.name}</h2>
                  {movie.rating && <p><strong>Rating:</strong> {movie.rating}</p>}
                  <p><strong>Time:</strong> {movie.time}</p>
                  {movie.genres && <p><strong>Genre:</strong> {movie.genres}</p>}
                </div>
              </Link>
              <button
                className={`favorite-button ${isFavorite ? "favorited" : ""}`}
                onClick={() => handleFavoriteToggle(movie)}
              >
                {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
