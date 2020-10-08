import React from "react";

import classes from "./LongLogo.module.css";

const LongLogo = () => {
    return (
        <a className={classes.LongLogo} href="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Logo-Horizontal.svg?alt=media&token=89e2739e-b484-470f-b142-f792e30b1aca" alt="C Thru Inspections LLC"/>
        </a>
    );
}

export default LongLogo;