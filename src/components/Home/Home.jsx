import React from "react";

import About from "./About/About";
import CTASection from "../CTASection/CTASection";
import Jumbotron from "./Jumbotron/Jumbotron";
import Reports from "./Reports/Reports";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";

import classes from "./Home.module.css";

const Home = (props) => {
    return (
        <div className={classes.Home}>
            <Jumbotron language={props.language} />
            <About language={props.language} />
            <Services language={props.language} />
            <Reports language={props.language} />
            <Reviews language={props.language} />
            <CTASection language={props.language} />
        </div>
    );
}

export default Home;