import React from "react";

import FooterBottom from "./FooterBottom/FooterBottom";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterHeader from "./FooterHeader/FooterHeader";
import FooterLinks from "./FooterLinks/FooterLinks";

import classes from "./Footer.module.css";

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <FooterHeader language={props.language}/>
            <div className={classes.FooterContent}>
                <FooterLinks language={props.language}/>
                <FooterContacts language={props.language}/>
            </div>
            <FooterBottom language={props.language}/>
        </div>
    );
}

export default Footer;