import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Fade from "react-reveal/Fade";

import classes from "./Bundle.module.css";

const Bundle = () => {
    return (
        <div className={classes.Bundle}>
            <Fade right>
                <div className={classes.Text}>
                    <h1>Insurance Inspection Combo</h1>
                    <p className={classes.Description}>Combine a Wind Mitigation Inspection and 4-Point Inspection for only</p>
                    <h1>$150</h1>
                    <CTAButton link="#contactus">Book You Inspection</CTAButton>
                    <p className={classes.Disclaimer}>*prices may vary depending on travel distance and square footage of home</p>
                </div>
            </Fade>
        </div>
    );
}

export default Bundle;