import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    let img = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/NewLogo.svg?alt=media&token=f386fceb-d57d-4cc5-aa7d-acf51dded3da";
    
    if (props.type === "dark") {
        img = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/NewLogoDark.svg?alt=media&token=faf3ac49-a240-46d1-b72b-0a39d61c7b64";
    }
    
    return (
        <a className={classes.Logo} href="/">
            <img src={img} alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default Logo;