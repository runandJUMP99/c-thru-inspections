import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <button onClick={props.onClick} className={classes.CTAButton} disabled={props.disabled}>
            {props.children}
        </button> 
    );
}

export default CTAButton;