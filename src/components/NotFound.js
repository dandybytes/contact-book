import React from "react";

import "./NotFound.css";

import Button from './common/Button'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-text">
        <p className="error-status">Error 404</p>
        <p className="not-found-message">Page not found</p>
      </div>

      <Button href={"/contacts"} className="button-animated-borders">
          Return to home page
      </Button>
    </div>
  );
};

export default NotFound;
