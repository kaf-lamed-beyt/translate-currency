import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
