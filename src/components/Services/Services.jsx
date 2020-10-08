import React from "react";

import Bundle from "./Bundle/Bundle";
import CTASection from "../CTASection/CTASection";
import Intro from "./Intro/Intro";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    return (
        <div className={classes.Services}>
            <Intro />
            <div className={classes.ServiceGroup}>
                <Service title="Home Inspection" icon="fas fa-house-damage" startingAt="Starting at: " price="295" description="A Home Inspection is a non-invasive examination of the condition of the home. Our Home Inspection consists of inspecting the most important components of a home, such as the foundation, frame, and roof, among others. Home Inspections typically take between 2 to 3 1/2 hours." />
                <Service title="Wind Mitigation Inspection" icon="fas fa-wind" price="85" description="A Wind Mitigation inspection, also called a Windstorm Mitigation Inspection, is when a Certified Inspector checks your home's wind resistant features. Though a wind mitigation inspection is not required to get for Florida Homeowners Insurance, it can result in substantial savings for your household." />
                <Service title="4-Point Inspection" icon="fas fa-bullseye" price="100" description="A 4-Point Inspection looks at the four major systems of your home: roof, electrical, plumbing, and HVAC. An insurance company wants to know that your home has been well maintained and the major systems are in solid, working condition." />
            </div>
            <Bundle />
            <CTASection />
        </div>
    );
}

export default Services;