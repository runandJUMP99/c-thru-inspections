import React from "react";

import classes from "./CTAButton.module.css";

const CTAButton = (props) => {
    return (
        <button className={classes.CTAButton} disabled={props.disabled}>
            <a href={props.link}>{props.children}</a>
        </button> 
    );
}

export default CTAButton;