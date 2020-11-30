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
            <FooterLink name={props.language ? "Inicio" : "Home"} link="/" onClick={scrollTop}/>
            <FooterLink name={props.language ? "Servicios" : "Services"} link="/services" onClick={scrollTop}/>
            <FooterLink name={props.language ? "Sobre Nosotros" : "About"} link="#aboutus" />
            {/* <FooterLink name="Terms" link="" onClick={scrollTop}/> */}
            <FooterLink name={props.language ? "Contáctenos" : "Contact Us"} link="/contactus" onClick={scrollTop}/>
        </ul>
    );
}

export default FooterLinks;