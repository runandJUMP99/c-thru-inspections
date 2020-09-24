import React from "react";

import classes from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={classes.FooterContacts}>
            <h4>Contact Us</h4>
            <p><i className="fas fa-envelope"></i>cthruinspections@gmail.com</p>
            <p><i className="fas fa-phone"></i>(407) 866-4980</p>
            <p><i className="fas fa-map-marker-alt"></i>Proudly Serving the Central Florida Area</p>
            <p><i className="fas fa-id-badge"></i>FL-HI13031</p>
        </div>
    );
}

export default FooterContacts;