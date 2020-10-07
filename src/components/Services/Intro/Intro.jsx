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
                <p>Home Inspectors provide their customers assurance with the safety and functions of their home. Our inspectors follow the InterNACHI Standards of Practice, which is the world's leading association for home inspectors. Our Certified Professional Inspectors (CPI) strive to keep up with new, emerging technologies to accomplish quality work on every home. Whether you are looking to do a 4-Point, Wind Mitigation, or a Home Inspection, we've got you covered!</p>
                <CTAButton link="#contactus">Schedule Your Inspection</CTAButton>
            </div>
        </div>
    );
}

export default Intro;