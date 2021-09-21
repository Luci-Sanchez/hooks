import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar mb-3 ${
        darkMode ? "navbar-dark bg-primary" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          React Albums
        </Link>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
