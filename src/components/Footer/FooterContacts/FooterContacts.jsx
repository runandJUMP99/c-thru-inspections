import React from "react";

import classes from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={classes.FooterContacts}>
            <h4>Contact Us</h4>
            <p><i className="fas fa-envelope"></i>info@cthruinspections.com</p>
            <p><i className="fas fa-phone"></i>(888) 555-9999</p>
            <p><i className="fas fa-map-marker-alt"></i>123 Actual Ave, Orlando, Florida, 39393</p>
        </div>
    );
}

export default FooterContacts;