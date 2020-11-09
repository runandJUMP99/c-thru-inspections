import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./About.module.css";

const About = () => {
    return (
        <div id="aboutus" className={classes.About}>
            <Fade left>
                <div className={classes.ContentContainer}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/CTHRU-Florida.svg?alt=media&token=dc013eff-717b-4329-8281-95b3129fb67c" alt="Green Door and Window"/>
                    <div className={classes.Text}>
                        <h2>Your Central Florida Home Inspector</h2>
                        <p><strong>C Thru Inspections</strong> was founded in Central Florida to assist home owners or those looking to purchase a home. Our goal is to put your mind at ease knowing that your home will be inspected by a Certified Professional Inspector (CPI) through <a className={classes.Link} target="_blank" rel="noopener noreferrer" href="https://www.nachi.org/">InterNACHI</a>, the only home inspector school accredited by the <a className={classes.Link} target="_blank" rel="noopener noreferrer" href="https://accet.org/">Accrediting Council for Continuing Education & Training</a> (ACCET). Florida has some of the toughest climates, and homes are prone to high wind conditions from hurricanes and tornadoes. Because of this, it is best to get your home checked annually. <strong>C Thru Inspections</strong> is also fully licensed and insured. We look forward to serving you!</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default About;