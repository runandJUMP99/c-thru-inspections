import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="About" link="#about" />
            <FooterLink name="Services" link="#services" />
            <FooterLink name="Terms" link="" />
            <FooterLink name="Privacy" link="" />
            <FooterLink name="Contact Us" link="#contact-us" />
        </ul>
    );
}

export default FooterLinks;