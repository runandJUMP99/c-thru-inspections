import React from "react";

import CTAButton from "../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div id="home" className={classes.Jumbotron}>
            <div className={classes.Carousel}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className={classes.Image1}>
                                <div className={classes.Text}>
                                    <h1>WHEN WAS YOUR LAST <em>inspection?</em></h1>
                                    <p>Allow one of our fully licensed inspectors to asses your home</p>
                                    <CTAButton>Schedule Your Inspection</CTAButton>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={classes.Image2}>
                                <div className={classes.Text1}>
                                    <h1>Standard Home Inspetions</h1>
                                    <p>Looking to buy a home? Allow us make sure it's up to your standards</p>
                                    <CTAButton>Schedule Your Inspection</CTAButton>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={classes.Image3}>
                                <div className={classes.Text2}>
                                    <h1>Superior Service</h1>
                                    <p>Quality inspections. Quality customer service</p>
                                    <CTAButton>Schedule Your Inspection</CTAButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;