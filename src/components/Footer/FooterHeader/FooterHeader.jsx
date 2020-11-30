import React from "react";

import Logo from "../../UI/Logo/Logo";

import classes from "./FooterHeader.module.css";

const FooterHeader = (props) => {
    return (
        <div className={classes.FooterHeader}>
            <div className={classes.Logo}>
                <Logo type="dark" />
            </div>
            <p>{props.language ? "Confiable - Profesional - Seguro" : "Trusted - Reliable - Secure"}</p>
        </div>
    );
}

export default FooterHeader;