import React from "react";

import classes from "./Scheduler.module.css";

const Scheduler = (props) => {    
    return (
        <div className={classes.Scheduler}>
            <h4>{props.language ? "Programe Su Inspección" : "Schedule Your Inspection"}</h4>
            <iframe src='https://www.spectora.com/home-inspectors/c-thru-inspections-llc/schedule?iframe=1'></iframe>
        </div>
    );
}

export default Scheduler;