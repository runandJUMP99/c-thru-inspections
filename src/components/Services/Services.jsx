import React from "react";

import Intro from "./Intro/Intro";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    return (
        <div className={classes.Services}>
            <Intro />
            <div className={classes.ServiceGroup}>
                <Service title="Home Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna egestas, semper augue ut, cursus enim. Aliquam tincidunt scelerisque orci. Suspendisse potenti. Praesent quis volutpat lorem. Maecenas libero quam, semper in eleifend sed, auctor mattis felis. Etiam dapibus aliquam sapien, non ornare nisl suscipit eget." />
                <Service title="Wind Mitigation Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna egestas, semper augue ut, cursus enim. Aliquam tincidunt scelerisque orci. Suspendisse potenti. Praesent quis volutpat lorem. Maecenas libero quam, semper in eleifend sed, auctor mattis felis. Etiam dapibus aliquam sapien, non ornare nisl suscipit eget." />
                <Service title="4-Point Inspection" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel magna egestas, semper augue ut, cursus enim. Aliquam tincidunt scelerisque orci. Suspendisse potenti. Praesent quis volutpat lorem. Maecenas libero quam, semper in eleifend sed, auctor mattis felis. Etiam dapibus aliquam sapien, non ornare nisl suscipit eget." />
            </div>
        </div>
    );
}

export default Services;