import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import classes from "./Service.module.css";

const Service = (props) => {
    const [iconColor, setIconColor] = useState("");

    function handleMouseOver() {
        setIconColor("white");
    }

    function handleMouseOut() {
        setIconColor("");
    }

    function handleClick() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={classes.Service}>
            <NavLink to="/services">
                <i className={props.icon} style={{color: iconColor}}></i>
                <h3>{props.service}</h3>
                <p>{props.description}</p>
            </NavLink>
        </div>
    );
}

export default Service;