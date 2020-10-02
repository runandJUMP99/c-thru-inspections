import React from "react";

import About from "./About/About";
import CTASection from "./CTASection/CTASection";
import Jumbotron from "./Jumbotron/Jumbotron";
import Reports from "./Reports/Reports";
import Services from "./Services/Services";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Jumbotron />
            <About />
            <Services />
            <Reports />
            <CTASection />
        </div>
    );
}

export default Home;