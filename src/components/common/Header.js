import React from "react";
import {NavLink} from "react-router-dom";

import "./Header.css";

import Logo from "./Logo";

const Header = () => {
    return (
        <header>
            <Logo />

            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <NavLink
                            className="navbar-list-item-link"
                            to="/contacts"
                            activeClassName="navbar-list-item-link-active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-list-item">
                        <NavLink
                            className="navbar-list-item-link"
                            to="/add"
                            activeClassName="navbar-list-item-link-active"
                        >
                            Add
                        </NavLink>
                    </li>
                    <li className="navbar-list-item">
                        <NavLink
                            className="navbar-list-item-link"
                            to="/about"
                            activeClassName="navbar-list-item-link-active"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
