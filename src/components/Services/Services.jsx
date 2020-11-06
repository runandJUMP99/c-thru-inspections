import React from "react";
import Fade from "react-reveal/Fade";
import {NavLink} from "react-router-dom";

import Bundle from "./Bundle/Bundle";
import CTASection from "../CTASection/CTASection";
import Intro from "./Intro/Intro";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = () => {
    function scrollTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className={classes.Services}>
            <Intro />
            <div className={classes.ServiceGroup}>
                <Service title="Home Inspection" icon="fas fa-house-damage" startingAt="Starting at: " price="295" description="A Home Inspection is a non-invasive examination of the condition of the home. Our Home Inspection consists of inspecting the most important components of a home, such as the foundation, frame, and roof, among others. Home Inspections typically take between 2 to 3 1/2 hours." />
                <Service title="Wind Mitigation Inspection" icon="fas fa-wind" price="85" description="A Wind Mitigation inspection, also called a Windstorm Mitigation Inspection, is when a Certified Inspector checks your home's wind resistant features. Though a wind mitigation inspection is not required to get for Florida Homeowners Insurance, it can result in substantial savings for your household." />
                <Service title="4-Point Inspection" icon="fas fa-bullseye" price="100" description="A 4-Point Inspection looks at the four major systems of your home: roof, electrical, plumbing, and HVAC. An insurance company wants to know that your home has been well maintained and the major systems are in solid, working condition." />
                <Fade>
                    <h1 className={classes.ExplanationHeader}>What To Expect From Your Home Inspection</h1>
                    <p className={classes.Explanation}>
                        With <strong>C Thru Inspections</strong>, expect that your home will be serviced by a fully certified, professional inspector using the most up-to-date equipment and software to evaluate the most important components of your home. Our inspectors will look over vital elements, such as the structural foundation, safety hazards, and parts of your home that may require maintenance to avoid future damage.
                        <br/><br/>
                        <strong>C Thru Inspections</strong> also provides full, easy to understand reports that will be available to you within 24 hours of your inspection. Our inspectors will also practice safe, social distancing and wear Personal Protective Equipment (PPE) for your comfort. Still have questions about your inspection? Feel free to <span className={classes.Link}><NavLink onClick={scrollTop} to="/contactus">contact us!</NavLink></span> We will be more than happy to assist in any way we can. We look forward to working with you!
                    </p>
                </Fade>
            </div>
            <Bundle />
            <CTASection />
        </div>
    );
}

export default Services;