import React from "react";

import classes from "./Logo.module.css";

const Logo = () => {
    return (
        <a className={classes.Logo} href="/">
            <h1><em>CTHRU</em> Inspections</h1>
        </a>
    );
}

export default Logo;