import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo-link" to="/">
        <h1 className="logo-title">
          <span className="logo-title-1 a">C</span>
          <img
            src="./contacts.png"
            alt="contacts logo"
            className="logo-title-img"
          />
          <span className="logo-title-1 b">ntact</span>
          <span className="logo-title-2">Book</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
