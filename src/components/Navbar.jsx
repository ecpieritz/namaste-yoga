import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/ny-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="fixed-top ny-navbar ny-bg__milk">
      <div className="container-fluid">
        <nav className="navbar navbar-light">
          <a href="/">
            <img src={logoImg} alt="Namaste logo" />
          </a>
          <button
            className={`navbar-toggler${isCollapsed ? " collapsed" : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="#ny-navbar-id"
            aria-controls="ny-navbar-id"
            aria-expanded={isCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
        <div
          className={`collapse${isCollapsed ? " show" : ""}`}
          id="ny-navbar-id"
        >
          <div className="p-4 text-right ny-navbar__links">
            <Link to="/" onClick={toggleCollapse}>
              <p>Home</p>
            </Link>
            <Link to="/about" onClick={toggleCollapse}>
              <p>About</p>
            </Link>
            <Link to="/videos" onClick={toggleCollapse}>
              <p>Videos</p>
            </Link>
            <Link to="/contact" onClick={toggleCollapse}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
