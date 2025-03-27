import React from 'react';
import './error.css';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div className="error-page-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! The page you are looking for does not exist.</p>
        <p className="error-description">It might have been moved or deleted.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="error-button"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
