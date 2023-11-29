import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { Image } from "react-bootstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="create" to="/create">
        Maximaze your property's value
      </Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/index">
        <button>Properties Listing</button>
      </Link>
    </div>
  );
};

export default NavBar;
