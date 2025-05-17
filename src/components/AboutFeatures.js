import React from "react";
import "./AboutFeatures.css";

const AboutFeatures = () => {
    return (
        <ul className="about-feature-list">
            <li>display contact list</li>
            <li>expand/collapse contact details</li>
            <li>sort contact list (e.g. by first/last name)</li>
            <li>choose contact name structure (frist- / last-)</li>
            <li>filter contact list by status (favorite, blocked)</li>
            {/* <li>save contacts to browser local storage</li> */}
            <li>load default contacts from sample list</li>
            <li>delete existing contact</li>
            <li>edit existing contact</li>
            <li>add new contact</li>
        </ul>
    );
};

export default AboutFeatures;
