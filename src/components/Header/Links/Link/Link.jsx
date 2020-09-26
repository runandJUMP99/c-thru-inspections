import React from "react";

import classes from "./Link.module.css";

const Link = (props) => {
    return (
        <li onClick={props.onClick} className={classes.Link}>
            <a href={props.link}>{props.name}</a>
        </li>
    );
}

export default Link;