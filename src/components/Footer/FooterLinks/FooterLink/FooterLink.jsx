import React from "react";

import classes from "./FooterLink.module.css";

const FooterLink = (props) => {
    return (
        <li className={classes.FooterLink}>
            {props.name}
        </li>
    );
}

export default FooterLink;