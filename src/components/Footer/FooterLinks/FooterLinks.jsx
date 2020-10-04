import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="Home" link="/" />
            <FooterLink name="About" link="#aboutus" />
            <FooterLink name="Services" link="#services" />
            <FooterLink name="Terms" link="" />
            <FooterLink name="Contact Us" link="#contactus" />
        </ul>
    );
}

export default FooterLinks;