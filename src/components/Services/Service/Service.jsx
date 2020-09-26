import React, {useState} from "react";

import classes from "./Service.module.css";

const Service = (props) => {
    const [iconColor, setIconColor] = useState("");

    function handleMouseOver() {
        setIconColor("white");
    }

    function handleMouseOut() {
        setIconColor("");
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={classes.Service}>
            <i className={props.icon} style={{color: iconColor}}></i>
            <h3>{props.service}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Service;