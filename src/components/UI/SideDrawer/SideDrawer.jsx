import React from "react";

import Links from "../../Header/Links/Links";
import Logo from "../Logo/Logo";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer} style={{
            transform: props.show ? "translateX(0)" : "translateX(-100%)",
        }}>
            <Logo />
            <nav>
                <Links />
            </nav>
        </div>
    )
}

export default SideDrawer;