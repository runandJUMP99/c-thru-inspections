import React from "react";

import classes from "./LongLogo.module.css";

const LongLogo = () => {
    return (
        <a className={classes.LongLogo} href="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo-Horizontal.svg?alt=media&token=57c84ca6-cbeb-4705-bf0f-0fefee0743fa" alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default LongLogo;