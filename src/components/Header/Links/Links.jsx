import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = (props) => {
    

    return (
        <ul className={classes.Links}>
            <Link name={props.language ? "Inicio" : "Home"} link="/" onClick={props.onClick} />
            <Link name={props.language ? "Servicios" : "Services"} link="/services" onClick={props.onClick} />
            <Link name={props.language ? "Sobre Nosotros" : "About"} link="#aboutus" onClick={props.onClick} />
            <Link name={props.language ? "Contáctenos" : "Contact Us"} link="/contactus" onClick={props.onClick} />
        </ul>
    );
}

export default Links;