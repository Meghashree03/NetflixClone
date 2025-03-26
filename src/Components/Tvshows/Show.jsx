import React from "react";
import { tvShows } from "../../Data/Tvshows"; // Assuming you saved TV shows in a file named TVShow.js
import "./show.css";

const TVShow = () => {
  return (
    <div className="tvshow-page">
      <h1 className="page-title">All TV Shows</h1>
      <div className="tvshow-grid">
        {tvShows.map((show) => (
          <div key={show.id} className="tvshow-card">
            <img src={show.cover} alt={show.name} className="tvshow-image" />
            <div className="tvshow-info">
              <h2>{show.name}</h2>
              {show.rating && <p><strong>Rating:</strong> {show.rating}</p>}
              <p><strong>Time:</strong> {show.time}</p>
              {show.genres && <p><strong>Genre:</strong> {show.genres}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShow;
