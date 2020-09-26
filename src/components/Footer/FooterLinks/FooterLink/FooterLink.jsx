import React from "react";

import classes from "./FooterLink.module.css";

const FooterLink = (props) => {
    return (
        <li className={classes.FooterLink}>
            <a href={props.link}>{props.name}</a>
        </li>
    );
}

export default FooterLink;