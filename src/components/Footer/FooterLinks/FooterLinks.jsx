import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="About Us" />
            <FooterLink name="Services" />
            <FooterLink name="Terms" />
            <FooterLink name="Privacy" />
            <FooterLink name="Contact Us" />
        </ul>
    );
}

export default FooterLinks;