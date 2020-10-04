import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = (props) => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" link="/" onClick={props.onClick} />
            <Link name="About" link="#aboutus" onClick={props.onClick} />
            <Link name="Services" link="/services" onClick={props.onClick} />
            <Link name="Contact Us" link="#contactus" onClick={props.onClick} />
        </ul>
    );
}

export default Links;