import React from "react";

import classes from "./FooterBottom.module.css";

const FooterBottom = (props) => {
    return (
        <p className={classes.FooterBottom}>
            {props.language ?
            "Derechos de autor © " : 
            "Copyright © "}
            {new Date().getFullYear()}
            {props.language ?
            " C Thru Inspections LLC | Diseñada Por " :
            " C Thru Inspections LLC | Designed By "} 
            <a target="_blank" rel="noopener noreferrer" href="https://mycv-bdfa2.web.app/">runandJUMP</a>
        </p>
    );
}

export default FooterBottom;