import React from "react";

import classes from "./FooterBottom.module.css";

const FooterBottom = () => {
    return (
        <p className={classes.FooterBottom}>
            Copyright © {new Date().getFullYear()} C Thru Inspections LLC | Designed By <a target="_blank" rel="noopener noreferrer" href="https://mycv-bdfa2.web.app/">runandJUMP</a>
        </p>
    );
}

export default FooterBottom;