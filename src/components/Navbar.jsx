import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-brand">
        <Link to="/">IMDb Clone</Link>
      </div>
      <div className="nav-links">
        <Link to="/favourites">Watchlist</Link>
        <button
          className="toggle-mode"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
