import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    return (
        <a className={classes.Logo} href="/" style={{color: props.color}}>
            <h1><em>CTHRU</em> Inspections</h1>
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/LogoWithBckground.svg?alt=media&token=fb4d2287-2d60-4bcb-ac95-b871d712b10e" alt="C Thru Inspections LLC"/> */}
        </a>
    );
}

export default Logo;