import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = props => {
  return (
    <button
      onClick={props.onClick}
      className={classes.CTAButton}
      disabled={props.disabled}
    >
      <a className={classes.Link} href={props.link}>
        {props.children}
      </a>
    </button>
  );
};

export default CTAButton;
