import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { homeData, recommended, upcome, latest } from "../../Data/Movie";
import "./filter.css";

const FilterMovies = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";
  const genreQuery = queryParams.get("genre") || "";

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const allMovies = [...homeData, ...recommended, ...upcome, ...latest];

    const results = allMovies.filter((movie) => {
      const matchesQuery = searchQuery
        ? movie.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesGenre = genreQuery
        ? movie.genres.toLowerCase().includes(genreQuery.toLowerCase())
        : true;
      return matchesQuery && matchesGenre;
    });

    setFilteredMovies(results);
  }, [searchQuery, genreQuery]);

  return (
    <div className="filter-container">
      <h1>Search Results</h1>
      <div className="filter-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="filter-card">
              <img src={movie.cover} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p>{movie.genres}</p>
              <a
                href={`/singlePage/${movie.id}`}
                className="filter-details-link"
              >
                View Details
              </a>
            </div>
          ))
        ) : (
          <p>
            No movies found matching "{searchQuery}"{" "}
            {genreQuery && `in the genre "${genreQuery}"`}.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterMovies;
