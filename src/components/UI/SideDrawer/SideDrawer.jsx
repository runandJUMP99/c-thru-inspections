import React from "react";

import Links from "../../Header/Links/Links";
import Logo from "../Logo/Logo";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer} style={{
            transform: props.show ? "translateX(0)" : "translateX(-110%)",
        }}>
            <Logo color="#006a71" />
            <nav>
                <Links onClick={props.onClick} />
            </nav>
        </div>
    )
}

export default SideDrawer;