import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./About.module.css";

const About = () => {
    return (
        <div id="about" className={classes.About}>
            <Fade left>
                <div className={classes.ContentContainer}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/house-768707_1920.jpg?alt=media&token=2735178c-78cd-495b-8a4c-1a590c0878a7" alt="Green Door and Window"/>
                    <div className={classes.Text}>
                        <h2>Who We Are</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a ullamcorper lectus. Nunc egestas neque sed euismod porttitor. Phasellus porttitor eu nisl et convallis. Sed quis lectus neque. Fusce commodo volutpat nisi at ullamcorper. Cras quis nisl lacus. Cras nec gravida dui. Aliquam sed nisl et odio semper euismod non nec tortor. Proin aliquet ac neque ut hendrerit. Etiam fringilla nec tortor nec tempus.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default About;