import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
    return (
        <a className={classes.Logo} href="/" style={{color: props.color}}>
            <h1><em>CTHRU</em> Inspections</h1>
        </a>
    );
}

export default Logo;