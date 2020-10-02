import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Service.module.css";

const Service = (props) => {
    return (
        <div className={classes.Service}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <CTAButton>Book Your Inspection</CTAButton>
        </div>
    );
}

export default Service;