import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./FooterLink.module.css";

const FooterLink = (props) => {
    let content = (
        <NavLink to={props.link}>
            {props.name}
        </NavLink>
    );
    
    if (props.link.includes("#")) {
        content = (
            <a href={"/" + props.link}>
                {props.name}
            </a>
        );
    }

    return (
        <li className={classes.FooterLink} onClick={props.onClick}>
            {content}
        </li>
    );
}

export default FooterLink;