import React from "react";

import classes from "./Reports.module.css";

const Reports = () => {
    return (
        <div className={classes.Reports}>
            <div className={classes.ContentContainer}>
                <div className={classes.Text}>
                    <h2>Detailed Inspection Reports</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor. Phasellus porttitor eu nisl et convallis. Sed quis lectus neque. Fusce commodo volutpat nisi at ullamcorper. Cras quis nisl lacus. Cras nec gravida dui. Aliquam sed nisl et odio semper euismod non nec tortor. Proin aliquet ac neque ut hendrerit. Etiam fringilla nec tortor nec tempus.</p>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/modern-technologies-1263422_1920.jpg?alt=media&token=ed5f0a20-cc67-43d5-b46d-c6cce890b06c" alt="Reports"/>
            </div>
        </div>
    );
}

export default Reports;