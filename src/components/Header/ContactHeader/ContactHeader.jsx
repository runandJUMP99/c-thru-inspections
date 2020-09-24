import React from "react";

import classes from "./ContactHeader.module.css";

const ContactHeader = () => {
    return (
        <div className={classes.ContactHeader}>
            <p><i className="fas fa-envelope"></i>cthruinspections@gmail.com</p>
            <p><i className="fas fa-phone"></i>(407) 866-4980</p>
        </div>
    );
}

export default ContactHeader;