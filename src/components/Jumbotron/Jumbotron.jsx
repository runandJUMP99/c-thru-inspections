import React from "react";

import CTAButton from "../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h1>DON'T LIVE ON THE <em>edge!</em></h1>
                <p>Allow one of our fully licensed inspectors to asses your home</p>
                <CTAButton>Schedule Your Inspection</CTAButton>
            </div>
        </div>
    );
}

export default Jumbotron;