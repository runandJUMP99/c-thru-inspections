import React from "react";

import Carousel from "../UI/Carousel/Carousel";
import CTAButton from "../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            {/* <div className={classes.Carousel}>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className={classes.Text}>
                                <h1></h1>
                                <p></p>
                            </div>
                            <img src="" className="d-block" alt="testimonial" />
                        </div>
                        <div className="carousel-item">
                            <div className={classes.Text}>
                            <h1></h1>
                            <p></p>
                            </div>
                            <img src="" className="d-block" alt="testimonial" />
                        </div>
                        <div className="carousel-item">
                            <div className={classes.Text}>
                            <h1></h1>
                            <p></p>
                            </div>
                            <img src="" className="d-block" alt="testimonial" />
                        </div>
                    </div>
                </div>
            </div> */}
            
            <div className={classes.Text}>
                <h1>DON'T LIVE ON THE <em>edge!</em></h1>
                <p>Allow one of our fully licensed inspectors to asses your home</p>
                <CTAButton>Schedule Your Inspection</CTAButton>
            </div>
        </div>
    );
}

export default Jumbotron;