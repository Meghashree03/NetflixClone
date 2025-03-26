import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
const Login = ({page}) => {
    const navigate = useNavigate();

    const onSignInClickHandler = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="login">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="holder bg-dark p-4 rounded shadow-lg w-100" style={{ maxWidth: "400px" }}>
                    <h1 className="text-white text-center">{page ? "Sign In": "Register"}</h1>
                    <br />
                    <form>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <button className="btn btn-danger w-100 mb-3" onClick={onSignInClickHandler}>
                        {page ? "Sign In": "Register"}
                        </button>
                        <div className="form-check text-white">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember Me
                            </label>
                        </div>
                    </form>
                    <div className="login-form-other text-center">
                        <div className="login-signup-now">
                        {page ? "New to Netflix?": "Existing user"}  &nbsp;
                            <Link className=""  to={page ? "/register" : "/login"}>

                            {page ? "Sign up now": " Sign In"}
                            
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="concord-img vlv-creative img-fluid position-absolute top-0 start-0 w-100 h-100"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt=""
                style={{ objectFit: "cover", zIndex: "-1" }}
            />
        </div>
    );
};

export default Login;
