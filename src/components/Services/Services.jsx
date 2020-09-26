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
                    <Service icon={"fas fa-house-damage"} service="Standard Home Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor." />
                    <Service icon={"fas fa-wind"} service="Wind Mitigation Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor." />
                    <Service icon={"fas fa-bullseye"} service="4-Point Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor." />
                </div>
            </Fade>
        </div>
    );
}

export default Services;