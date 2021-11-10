import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    let img = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/NewLogo.svg?alt=media&token=dcb1dfb9-1e33-4739-bc8e-7cac65ba6c58";
    
    if (props.type === "dark") {
        img = "https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/NewLogoDark.svg?alt=media&token=1c400517-6af2-4698-b8b5-397d59372112";
    }
    
    return (
        <a className={classes.Logo} href="/">
            <img src={img} alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default Logo;