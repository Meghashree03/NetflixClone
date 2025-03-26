import { useNavigate } from "react-router-dom";
import "./homebanner.css";


const HomeBanner = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };
  return (
    <div className="home-banner position-relative text-center text-white">
      <div className="our-story container position-absolute top-50 start-50 translate-middle">
        <h1 className="fw-bold display-4">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="lead mb-4">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
          />
          
          <button className="btn btn-danger" onClick={handleGetStarted}>Get Started</button>

          
        </div>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative img-fluid position-absolute top-0 start-0 w-100 h-100"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Background"
        style={{ objectFit: "cover", zIndex: "-1" }}
      />
    </div>
  );
};

export default HomeBanner;
