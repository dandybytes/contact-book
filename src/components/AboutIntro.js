import React from "react";
import "./AboutIntro.css";

const AboutIntro = () => {
    return (
        <div className="about-app-intro">
            {/* <h3>ContactBook</h3> */}
            <p>
                an address book / contact management app created with React class-based components
                to structure the markup and optimize rendering performance as well as Redux to
                centralize state/store management
            </p>
            <a
                href="https://github.com/dandybytes/contact-book"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-code-branch" />
                &nbsp; source code
            </a>
        </div>
    );
};

export default AboutIntro;
