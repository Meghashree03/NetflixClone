import React from "react";
import "./footer.css";
import { useTheme } from "../ContextToggle/ContextBackground";


const Footer = () => {

    const { toggleTheme } = useTheme();
  return (
    <footer className="netflix-footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Toggle Theme
        </button>
        <p>&copy; 2025 Netflix, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
