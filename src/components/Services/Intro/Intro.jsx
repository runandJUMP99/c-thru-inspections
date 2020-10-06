import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <div className={classes.Filter}></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/home-2861604_1920.jpg?alt=media&token=ea9cb7b8-c042-46bc-95b6-662f1c5fa997" alt="Home With Ladder"/>
            <div className={classes.Text}>
                <h1>Inspection Services</h1>
                <p>Our inspectors follow ASHI guidelines and practices to guarantee your home is given the highest quality inspection. Every component of your home that is scheduled to be inspected will be assessed with the most up to date technologies to make sure your feel secure about the quality of your home.</p>
                <CTAButton link="#contactus">Schedule Your Inspection</CTAButton>
            </div>
        </div>
    );
}

export default Intro;