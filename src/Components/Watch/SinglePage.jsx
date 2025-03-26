// SinglePage.js
import React, { useState, useEffect } from "react";
import "./single.css";
import { useParams } from "react-router-dom";
import { homeData, recommended, upcome, latest,trending } from "../../Data/Movie";
import Upcomming from "../Upcoming/Upcoming";


const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

    const allData = [...homeData, ...recommended, ...upcome, ...latest, ...trending];
    const foundItem = allData.find((movie) => movie.id === parseInt(id));
    if (foundItem) {
      setItem(foundItem);
      setIsFavorite(storedFavorites.some((fav) => fav.id === foundItem.id));
    }
  }, [id]);

  const handleFavoriteClick = () => {
    if (item) {
      let updatedFavorites;
      if (isFavorite) {
        updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
      } else {
        updatedFavorites = [...favorites, item];
      }
      setFavorites(updatedFavorites);
      setIsFavorite(!isFavorite);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const [rec] = useState(recommended);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className="singleCard">
              <div className="singleImage">
                <img src={item.cover} alt={`${item.name} cover`} />
              </div>
            </div>
            <div className="container">
              <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>Genres: {item.genres}</p>
                <p>Movies are a powerful medium of storytelling that transcend boundaries, bringing to life emotions, cultures, and ideas in ways that resonate with audiences worldwide. From heart-pounding thrillers and heartfelt dramas to epic adventures and light-hearted comedies, films capture the essence of human experiences and imagination. They have the ability to transport viewers to fantastical worlds, shed light on real-world issues, 
                  or offer a comforting escape from daily life. With each frame, dialogue, and soundtrack, movies inspire, entertain, and connect people, making them an integral part of global culture and entertainment.</p>
              </div>
              <div className="social">
                <h3>Share:</h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" alt="Twitter" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" alt="LinkedIn" />
              </div>
              <div className="favorite-section">
                <button className="favorite-button" onClick={handleFavoriteClick}>
                  {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
                </button>
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Recommended Movies" />
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </>
  );
};

export default SinglePage;

