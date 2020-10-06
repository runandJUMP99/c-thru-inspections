import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    let imageSource = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo-BlueLine-Transparent.svg?alt=media&token=230ac051-9c5d-4ba4-af3d-a4417d5073ed";

    if (props.type === "dark") {
        imageSource = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo-BlueLine-DarkBackgrounds.svg?alt=media&token=3398fa2c-9590-4896-8ead-6e3f1f6de51f";
    }

    return (
        <a className={classes.Logo} href="/" style={{color: props.color}}>
            <img src={imageSource} alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default Logo;