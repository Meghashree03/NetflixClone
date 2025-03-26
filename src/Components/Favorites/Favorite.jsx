import React, { useEffect, useState } from "react";
import "./fav.css";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Remove a movie from favorites
  const handleRemove = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="fav-container">
      <h1 className="page-title">My Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="fav-grid">
          {favorites.map((movie) => (
            <div className="fav-card" key={movie.id}>
              <img src={movie.cover} alt={movie.name} />
              <div className="fav-info">
                <h3>{movie.name}</h3>
                <p>Date: {movie.date}</p>
                <p>Genres: {movie.genres}</p>
              </div>
              <button
                className="fav-remove-btn"
                onClick={() => handleRemove(movie.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies added yet!</p>
      )}
    </div>
  );
};

export default Favorite;
