import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    let img = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo.svg?alt=media&token=4fc2df9e-efa3-4628-9b73-dcbe4d0c64ff";
    
    if (props.type === "dark") {
        img = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo-DarkBackground.svg?alt=media&token=f59bc4fb-052b-4ad9-9215-feaed29a29d4";
    }
    
    return (
        <a className={classes.Logo} href="/">
            <img src={img} alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default Logo;