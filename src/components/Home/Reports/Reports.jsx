import React from "react";

// import CTAButton from "../../UI/CTAButton/CTAButton";
import Fade from "react-reveal/Fade";

import classes from "./Reports.module.css";

const Reports = () => {
    return (
        <div className={classes.Reports}>
            <Fade right>
                <div className={classes.ContentContainer}>
                    <div className={classes.Text}>
                        <h2>Detailed Home Inspection Reports</h2>
                        <p><strong>C Thru Inspections</strong> provides detailed reports for all of our inspections. We utilize the most up to date applications that allow us to navigate through the house and break down some of the most important components of your home. This provides us the ability to deliver you a detailed inspection report within 24-48 hours, and sometimes even within the same day!  </p>
                        {/* <CTAButton>See Example Report</CTAButton> */}
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/markus-spiske-SRNKol31s64-unsplash.jpg?alt=media&token=10c9dcc9-6067-47ca-9cc9-28bff305a455" alt="Reports"/>
                </div>
            </Fade>
        </div>
    );
}

export default Reports;