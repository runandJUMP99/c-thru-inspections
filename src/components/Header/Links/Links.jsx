import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = (props) => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" link="#home" onClick={props.onClick} />
            <Link name="About" link="#about" onClick={props.onClick} />
            <Link name="Services" link="#services" onClick={props.onClick} />
            <Link name="Contact Us" link="#contact-us" onClick={props.onClick} />
        </ul>
    );
}

export default Links;