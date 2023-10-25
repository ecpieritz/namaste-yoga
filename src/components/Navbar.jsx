import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/ny-logo.png";

function Navbar() {
  return (
    <div class="fixed-top">
      <nav class="navbar navbar-light bg-light">
        <a href="/">
          <img src={logoImg} alt="Namaste logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ny-navbar-id"
          aria-controls="ny-navbar-id"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div class="collapse" id="ny-navbar-id">
        <div class="bg-light p-4 text-right">
              <Link to="/"><p>Home</p></Link>
              <Link to="/about"><p>About</p></Link>
              <Link to="/videos"><p>Videos</p></Link>
              <Link to="/contact"><p>Contact</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
