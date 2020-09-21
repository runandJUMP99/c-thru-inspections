import React from "react";

import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    return (
        <div className={classes.Services}>
            <h1>What We Offer</h1>
            <div className={classes.ServicesGroup}>
                <Service icon={<i className="fas fa-house-damage"></i>} service="Standard Home Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor." />
                <Service icon={<i className="fas fa-wind"></i>} service="Wind Mitigation Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor." />
                <Service icon={<i className="fas fa-bullseye"></i>} service="4-Point Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor." />
            </div>
        </div>
    );
}

export default Services;