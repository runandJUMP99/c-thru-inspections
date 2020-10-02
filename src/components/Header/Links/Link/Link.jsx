import React from "react";

import {NavLink} from "react-router-dom";

import classes from "./Link.module.css";

const Link = (props) => {
    return (
        <li onClick={props.onClick} className={classes.Link}>
            <NavLink to={props.link}>
                {props.name}
            </NavLink>
        </li>
    );
}

export default Link;