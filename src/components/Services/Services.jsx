import React from "react";

import Fade from "react-reveal/Fade";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    return (
        <div id="services" className={classes.Services}>
            <Fade bottom>
                <h1>What We Offer</h1>
                <div className={classes.ServicesGroup}>
                    <Service icon={"fas fa-house-damage"} service="Home Inspection" description="For new or existing home owners, inspections provide our clients knowledge and information on the current state of one of their largest investments." />
                    <Service icon={"fas fa-wind"} service="Wind Mitigation Inspection" description="Hurricanes are common in Florida. This inspection assists in determining how vulnerable your home is to high velocity winds." />
                    <Service icon={"fas fa-bullseye"} service="4-Point Inspection" description="Rest easy knowing that the four major components of your home: roofing, plumbing, electrical, and HVAC systems, are secure." />
                </div>
            </Fade>
        </div>
    );
}

export default Services;