import React from "react";

import FooterBottom from "./FooterBottom/FooterBottom";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterHeader from "./FooterHeader/FooterHeader";
import FooterLinks from "./FooterLinks/FooterLinks";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <FooterHeader />
            <div className={classes.FooterContent}>
                <FooterLinks />
                <FooterContacts />
            </div>
            <FooterBottom />
        </div>
    );
}

export default Footer;