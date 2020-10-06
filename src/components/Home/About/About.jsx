import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./About.module.css";

const About = () => {
    return (
        <div id="aboutus" className={classes.About}>
            <Fade left>
                <div className={classes.ContentContainer}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/house-768707_1920.jpg?alt=media&token=2735178c-78cd-495b-8a4c-1a590c0878a7" alt="Green Door and Window"/>
                    <div className={classes.Text}>
                        <h2>Who We Are</h2>
                        <p><strong>C Thru inspections</strong> was founded in Central Florida to assist home owners or those looking to purchase a home. Our goal is to put your mind at ease knowing that your home will be inspected by a Certified Professional Inspector (CPI) through InterNACHI, the only home inspector school accredited by the Accrediting Council for Continuing Education & Training (ACCET). Florida has some of the toughest climates, and homes are prone to high wind conditions from hurricanes and tornadoes. Because of this, it is best to get your home checked annually. <strong>C Thru Inspections</strong> is also fully licensed and insured. We look forward to serving you!</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default About;