import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 className="about-title">Contact Book</h2>
        <h4 className="about-subtitle">contact list / address book app</h4>
      </div>
      <div className="about-tech-stack">
        {/* <p className="about-tech-stack-headline">built with:</p> */}
        <ul className="about-tech-stack-list">
          <li className="about-tech-stack-list-item">React</li>
          <li className="about-tech-stack-list-item">Redux</li>
          <li className="about-tech-stack-list-item">React Router</li>
        </ul>
      </div>
      <div className="about-features">
        {/* <p className="about-features-headline">features / functionality:</p> */}
        <ul className="about-features-list">
          <li>display contact list</li>
          <li>expand/collapse contact details</li>
          <li>sort contact list (e.g. by first/last name)</li>
          <li>change rendering of contact names (frist-last / last-first)</li>
          <li>filter contact list by status (e.g. favorite, blocked)</li>
          <li>load default contacts from sample list</li>
          <li>delete existing contact</li>
          <li>edit existing contact</li>
          <li>add new contact</li>
        </ul>
      </div>
      <Link to="/contacts" className="about-button-link">
        <button className="about-button">Let me try it!</button>
      </Link>
    </div>
  );
};

export default About;
