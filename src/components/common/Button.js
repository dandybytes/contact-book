import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({href, onClick, className, style, children}) => {
    return (
        <Link
            to={href}
            className={className}
            // target="_blank"
            // rel="noopener noreferrer"
            style={style}
            onClick={onClick}
        >
            <span className="button-border" />
            <span className="button-border" />
            <span className="button-border" />
            <span className="button-border" />
            {children}
        </Link>
    );
};

Button.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
};

Button.defaultProps = {
    href: "#",
    onClick: () => {},
    className: "button-animated-borders"
};

export default Button;
