import React, {useState} from "react";

import About from "./About/About";
import Backdrop from "./UI/Backdrop/Backdrop";
import CTASection from "./CTASection/CTASection";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import Reports from "./Reports/Reports";
import Services from "./Services/Services";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

const Layout = () => {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(prevValue => !prevValue);
    }

    return (
        <div className={classes.Layout}>
            <Backdrop show={show} onClick={handleClick} />
            <SideDrawer show={show} />
            <Header onClick={handleClick}/>
            <Jumbotron />
            <About />
            <Services />
            <Reports />
            <CTASection />
        </div>
    );
}

export default Layout;