import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Bundle.module.css";

const Bundle = () => {
    return (
        <div className={classes.Bundle}>
            <div className={classes.Text}>
                <h1>Insurance Inspection Combo</h1>
                <p>Combine a Wind Mitigation Inspection and 4-Point Inspection for only</p>
                <h1>$125</h1>
                <CTAButton>Book You Inspection</CTAButton>
            </div>
        </div>
    );
}

export default Bundle;