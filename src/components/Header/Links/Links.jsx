import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <Link name="Home" />
            <Link name="About" />
            <Link name="Services" />
            <Link name="Contact Us" />
        </ul>
    );
}

export default Links;