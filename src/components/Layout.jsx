import React, {useState} from "react";

import About from "./About/About";
import Backdrop from "./UI/Backdrop/Backdrop";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
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
        </div>
    );
}

export default Layout;