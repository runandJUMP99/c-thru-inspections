import React, {useState} from "react";

import CTAButton from "../CTAButton/CTAButton";

import classes from "./SideMessage.module.css";

const SideMessage = () => {
    const [show, setShow] = useState(false);
    const [style, setStyle] = useState(null);

    function handleShow() {
        setStyle("-7.25rem");
        setShow(true);
    }

    function handleHide() {
        setStyle("-19.35rem");
        setShow(false);
    }

    function handleMouseOver() {
        setStyle("-7.25rem");
    }

    function handleMouseExit() {
        setStyle("-19.35rem");
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseExit} className={classes.SideMessage} style={{left: style}}>
            <div onClick={handleHide} className={classes.HiddenBackdrop} style={{display: show ? "block" : "none"}}></div>
            <div className={classes.Message}>
                <p>Save 10% by using <span className={classes.Discount}>"MILITARY10"</span> when booking your inspection!</p>
                <CTAButton onClick={handleHide} link="#contactus">Book Now</CTAButton>
                <p className={classes.Disclaimer}>*Must show proof before inspection date</p>
            </div>
            <p onClick={handleShow} className={classes.MessageTab}>Military Discount</p>
        </div>
    );
}

export default SideMessage;