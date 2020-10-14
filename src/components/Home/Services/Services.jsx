import React from "react";

import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    return (
        <div id="services" className={classes.Services}>
            <h1>What We Offer</h1>
            <div className={classes.ServicesGroup}>
                <Service icon={"fas fa-house-damage"} service="Home Inspection" description="For new or existing home owners, inspections provide our clients knowledge and information on the current state of one of their largest investments." />
                <Service icon={"fas fa-wind"} service="Wind Mitigation Inspection" description="Hurricanes are common in Florida. This inspection assists in determining how vulnerable your home is to high velocity winds." />
                <Service icon={"fas fa-bullseye"} service="4-Point Inspection" description="Rest easy knowing that the four major components of your home: roofing, plumbing, electrical, and HVAC systems, are secure." />
            </div>
            <div className={classes.Logos}>
                <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/CPI-Logo.png?alt=media&token=1c761a2d-1c00-49db-9ec6-94f915efdaec" alt="CPI Logo"/>
                <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Wind%20Mitigation-Logo.png?alt=media&token=11296278-04da-4455-aef3-fb79b780f079" alt="Wind Mitigation Logo"/>
                <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Four%20Point-Logo.png?alt=media&token=cf4719db-2c65-471c-b284-08def6a13364" alt="Four Point Logo"/>
            </div>
        </div>
    );
}

export default Services;