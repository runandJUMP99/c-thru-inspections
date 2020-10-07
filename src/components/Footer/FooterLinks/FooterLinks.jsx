import React from "react";

import FooterLink from "./FooterLink/FooterLink";

import classes from "./FooterLinks.module.css";

const FooterLinks = (props) => {
    function scrollTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <ul className={classes.FooterLinks}>
            <FooterLink name="Home" link="/" onClick={scrollTop}/>
            <FooterLink name="About" link="#aboutus" />
            <FooterLink name="Services" link="/services" onClick={scrollTop}/>
            {/* <FooterLink name="Terms" link="" onClick={scrollTop}/> */}
            <FooterLink name="Contact Us" link="/contactus" onClick={scrollTop}/>
        </ul>
    );
}

export default FooterLinks;