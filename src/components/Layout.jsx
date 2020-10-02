import React, {useState} from "react";

import Backdrop from "./UI/Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SideDrawer from "./UI/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

const Layout = (props) => {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(prevValue => !prevValue);
    }

    return (
        <div className={classes.Layout}>
            <Backdrop show={show} onClick={handleClick} />
            <SideDrawer show={show} onClick={handleClick} />
            <Header onClick={handleClick} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;