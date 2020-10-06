import React from "react";

import classes from "./Logo.module.css";

const Logo = () => {
    return (
        <a className={classes.Logo} href="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo.svg?alt=media&token=4fc2df9e-efa3-4628-9b73-dcbe4d0c64ff" alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default Logo;