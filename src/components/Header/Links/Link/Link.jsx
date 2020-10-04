import React from "react";

import {NavLink} from "react-router-dom";

import classes from "./Link.module.css";

const Link = (props) => {
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
        <li onClick={() => props.onClick(props.name)} className={classes.Link}>
            {content}
        </li>
    );
}

export default Link;