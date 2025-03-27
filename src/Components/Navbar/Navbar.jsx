import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/profile.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    if (genre) {
      navigate(`/search?genre=${encodeURIComponent(genre)}`);
    }
  };

  return (
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">
            <img
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix Logo"
            />
          </Link>

         
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search movies..."
              className="search-input"
              value={query}
              onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="navbar-genre">
            <select
              value={selectedGenre}
              onChange={handleGenreChange}
              className="genre-dropdown"
            >
              <option value="">Filter by Genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Romance">Romance</option>
              
            </select>
          </div>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mylist">
                My List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv-shows">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newandpopular">
                New & Popular
              </Link>
            </li>
          </ul>

          <div className="profile-container">
            <img
              className="profile-image"
              src={profileImage}
              alt="Profile"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
