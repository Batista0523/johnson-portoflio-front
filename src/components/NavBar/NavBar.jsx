import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="create-btn">
        <Link to="./create">
          <h3>Maximize your property's value</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
