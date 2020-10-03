import React from "react";

import About from "./About/About";
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
        </div>
    );
}

export default Home;