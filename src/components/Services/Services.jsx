import React from "react";

import Bundle from "./Bundle/Bundle";
import Intro from "./Intro/Intro";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    return (
        <div className={classes.Services}>
            <Intro />
            <div className={classes.ServiceGroup}>
                <Service title="Home Inspection" icon="fas fa-house-damage" price="325" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna egestas, semper augue ut, cursus enim. Aliquam tincidunt scelerisque orci. Suspendisse potenti. Praesent quis volutpat lorem. Maecenas libero quam, semper in eleifend sed, auctor mattis felis. Etiam dapibus aliquam sapien, non ornare nisl suscipit eget." />
                <Service title="Wind Mitigation Inspection" icon="fas fa-wind" price="75" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna egestas, semper augue ut, cursus enim. Aliquam tincidunt scelerisque orci. Suspendisse potenti. Praesent quis volutpat lorem. Maecenas libero quam, semper in eleifend sed, auctor mattis felis. Etiam dapibus aliquam sapien, non ornare nisl suscipit eget." />
                <Service title="4-Point Inspection" icon="fas fa-bullseye" price="75" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna egestas, semper augue ut, cursus enim. Aliquam tincidunt scelerisque orci. Suspendisse potenti. Praesent quis volutpat lorem. Maecenas libero quam, semper in eleifend sed, auctor mattis felis. Etiam dapibus aliquam sapien, non ornare nisl suscipit eget." />
            </div>
            <Bundle />
        </div>
    );
}

export default Services;