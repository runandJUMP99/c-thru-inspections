import React from "react";

import classes from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={classes.FooterContacts}>
            <h4>Contact Us</h4>
            <div className={classes.ContactUs}>
                <div>
                    <p><a href="mailto:cthruinspections@gmail.com" ><i className="fas fa-envelope"></i>cthruinspections@gmail.com</a></p>
                    <p><a href="tel:407-813-5064" ><i className="fas fa-phone"></i>(407) 813-5064</a></p>
                    <p><i className="fas fa-id-badge"></i>FL-HI13031</p>
                </div>
                <div>
                    <p><i className="fas fa-map-marker-alt"></i>Proudly Serving the Central Florida Area</p>
                    <p><i className="fas fa-clock"></i>Monday - Saturday: 8:00am - 5:00pm</p>
                    <div className={classes.SocialLinks}>
                        <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://yelp.com/biz/c-thru-inspections-kissimmee"><i class="fab fa-yelp"></i></a></p>
                        <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/C-Thru-Inspections-LLC-103441381576988"><i class="fab fa-facebook"></i></a></p>
                        <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/c_thru_inspections/"><i class="fab fa-instagram"></i></a></p>
                        <p><a className={classes.SocialLink} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/holiver-estrada-62b1141bb/"><i class="fab fa-linkedin"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContacts;