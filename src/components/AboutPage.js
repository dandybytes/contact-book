import React from "react";
import TabBoard from "./common/TabBoard";
import Button from "./common/Button";
import "./AboutPage.css";
import AboutIntro from "./AboutIntro";
import AboutFeatures from "./AboutFeatures";
import AboutTech from "./AboutTech";

const AboutPage = () => {
    const tabs = [
        {title: "Intro", content: <AboutIntro />},
        {title: "Features", content: <AboutFeatures />},
        {title: "Tech", content: <AboutTech />}
    ];

    return (
        <div className="about-container">
            <TabBoard tabs={tabs} />

            <Button href={"/contacts"} className="button-animated-borders">
                Let me try it!
            </Button>
        </div>
    );
};

export default AboutPage;
