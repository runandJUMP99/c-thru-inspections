import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import Fade from "react-reveal/Fade";

import classes from "./Service.module.css";

const Service = (props) => {
    const [color, setColor] = useState("");

    function handleMouseOver() {
        setColor("white");
    }

    function handleMouseOut() {
        setColor("");
    }

    function handleClick() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <Fade bottom>
            <div onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={classes.Service}>
                <NavLink to="/services">
                    <i className={props.icon} style={{color: color}}></i>
                    <h3 style={{color: color}}>{props.service}</h3>
                    <p style={{color: color}}>{props.description}</p>
                </NavLink>
            </div>
        </Fade>
    );
}

export default Service;