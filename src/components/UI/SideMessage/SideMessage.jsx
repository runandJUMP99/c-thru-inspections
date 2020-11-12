import React from "react";

import CTAButton from "../CTAButton/CTAButton";

import classes from "./SideMessage.module.css";

const SideMessage = () => {
    return (
        <div className={classes.SideMessage}>
            <div className={classes.Message}>
                <p>Save 10% by using <span className={classes.Discount}>"MILITARY10"</span> when booking your inspection!</p>
                <CTAButton link="#contactus">Book Now</CTAButton>
                <p className={classes.Disclaimer}>*Must show proof before inspection date</p>
            </div>
            <p className={classes.MessageTab}>Military Discount</p>
        </div>
    );
}

export default SideMessage;