import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Service.module.css";

const Service = (props) => {
    return (
        <div className={classes.Service}>
            <h2>{props.title}</h2>
            <i className={props.icon}></i>
            <p>{props.description}</p>
            <h3><p className={classes.StartingAt}>{props.startingAt}</p>${props.price}</h3>
            <CTAButton>Book Your Inspection</CTAButton>
        </div>
    );
}

export default Service;