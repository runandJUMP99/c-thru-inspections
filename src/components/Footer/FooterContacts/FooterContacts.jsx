import React from "react";

import classes from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={classes.FooterContacts}>
            <h4>Contact Us</h4>
            <div className={classes.ContactUs}>
                <div>
                    <p><a href="mailto:cthruinspections@gmail.com" ><i className="fas fa-envelope"></i>cthruinspections@gmail.com</a></p>
                    <p><a href="tel:407-866-4980" ><i className="fas fa-phone"></i>(407) 866-4980</a></p>
                    <p><i className="fas fa-id-badge"></i>FL-HI13031</p>
                </div>
                <div>
                    <p><i className="fas fa-map-marker-alt"></i>Proudly Serving the Central Florida Area</p>
                    <p><i className="fas fa-clock"></i>Monday - Saturday<br/>8:00am - 5:00pm</p>
                </div>
            </div>
        </div>
    );
}

export default FooterContacts;