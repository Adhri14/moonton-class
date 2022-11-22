import React from "react";
import PropTypes from "prop-types";

InputLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default function InputLabel({ children, className = "" }) {
    return (
        <label className={`text-base block mb-2 ${className}`}>
            {children}
        </label>
    );
}
