import React from "react";

import CTAButton from "../CTAButton/CTAButton";

import classes from "./Carousel.module.css";

const Carousel = (props) => {
    return (
        <div className={classes.Carousel}>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={classes.Text}>
                            <h1>{props.header[0]}</h1>
                            <p>{props.text[0]}</p>
                        </div>
                        <img src={props.img[0]} className="d-block" alt="testimonial" />
                    </div>
                    <div className="carousel-item">
                        <div className={classes.Text}>
                        <h1>{props.header[1]}</h1>
                        <p>{props.text[1]}</p>
                        </div>
                        <img src="" className="d-block" alt="testimonial" />
                    </div>
                    <div className="carousel-item">
                        <div className={classes.Text}>
                        <h1>{props.header[2]}</h1>
                        <p>{props.text[2]}</p>
                        </div>
                        <img src="" className="d-block" alt="testimonial" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;