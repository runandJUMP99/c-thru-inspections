import React from "react";

import classes from "./Service.module.css";

const Service = (props) => {
    return (
        <div className={classes.Service}>
            {props.icon}
            <h3>{props.service}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Service;