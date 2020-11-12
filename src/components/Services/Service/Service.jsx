import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Fade from "react-reveal/Fade";

import classes from "./Service.module.css";

const Service = (props) => {
    return (
        <Fade bottom>
            <div className={classes.Service}>
                <h2>{props.title}</h2>
                <i className={props.icon}></i>
                <p>{props.description}</p>
                <h3><p className={classes.StartingAt}>{props.startingAt}</p>${props.price}</h3>
                <CTAButton link="#contactus">Book Your Inspection</CTAButton>
                <p className={classes.Disclaimer}>*Prices may vary depending on travel distance and square footage of home</p>
            </div>
        </Fade>
    );
}

export default Service;