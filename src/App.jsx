
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import "./App.css";
import MovieDetails from "./Pages/MovieDetails";
import MoviePage from "./Pages/MoviePage";
import ResultPage from "./Pages/ResultPage";
import FavoritePage from "./Pages/FavoritePage";
import TvshowPage from "./Pages/TvshowPage";
import NewandPopularPage from "./Pages/NewandPopularPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useTheme } from "./Components/ContextToggle/ContextBackground";

function App() {
  const { theme } = useTheme();
  return (

    <div
      style={{
        backgroundColor: theme === "white" ? "white" : "initial", // Default or white
        color: theme === "white" ? "black" : "inherit", // Adjust text color for white theme
        minHeight: "100vh",
      }}
    >


    <BrowserRouter>
      <ConditionalNavbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage page={true} />} />
          <Route path="/register" element={<LoginPage page={false} />} />
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/singlePage/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/search" element={<ResultPage />} />
          <Route path="/mylist" element={<FavoritePage />} />
          <Route path="/tv-shows" element={<TvshowPage />} />
          <Route path="/newandpopular" element={<NewandPopularPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const excludedRoutes = ["/", "/login", "/register"];
  return !excludedRoutes.includes(location.pathname) && <Navbar />;
}

export default App;
