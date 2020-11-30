import React, {useState} from "react";

import Backdrop from "./UI/Backdrop/Backdrop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SideDrawer from "./UI/SideDrawer/SideDrawer";
import SideMessage from "./UI/SideMessage/SideMessage";

import classes from "./Layout.module.css";

const Layout = (props) => {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(prevValue => !prevValue);
    }

    return (
        <div className={classes.Layout}>
            <Backdrop show={show} language={props.language} onClick={handleClick} />
            <SideDrawer show={show} language={props.language} onClick={handleClick} />
            <Header language={props.language} onClick={handleClick} />
            <SideMessage language={props.language} />
            <main>
                {props.children}
            </main>
            <Footer language={props.language} />
        </div>
    );
}

export default Layout;