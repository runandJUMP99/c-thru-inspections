import React from "react";

import Logo from "../../UI/Logo/Logo";

import classes from "./FooterHeader.module.css";

const FooterHeader = () => {
    return (
        <div className={classes.FooterHeader}>
            <Logo />
            <p>Trusted - Reliable - Secure</p>
        </div>
    );
}

export default FooterHeader;