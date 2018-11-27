import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/contacts">
              Home
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/add">
              Add
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink className="navbar-list-item-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
