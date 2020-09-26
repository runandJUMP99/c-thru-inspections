import React from "react";

import classes from "./ContactHeader.module.css";

const ContactHeader = () => {
    return (
        <div className={classes.ContactHeader}>
            <a href="mailto:cthruinspections@gmail.com"><i className="fas fa-envelope"></i>cthruinspections@gmail.com</a>
            <a href="tel:407-866-4980"><i className="fas fa-phone"></i>(407) 866-4980</a>
        </div>
    );
}

export default ContactHeader;