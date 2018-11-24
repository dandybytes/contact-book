import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* <div className="container"> */}
      <div className="logo">
        <h1 className="logo-title">
          <span className="logo-title-1">Contact</span>
          <span className="logo-title-2">Book</span>
        </h1>
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/add">
              Add
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/favorite">
              Favorite
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/blocked">
              Blocked
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
