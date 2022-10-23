import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favs">Favorites</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
