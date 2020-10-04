import React from "react";

import Links from "../../Header/Links/Links";
import Logo from "../Logo/Logo";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    function handleClick(link) {
        if (link === "Home" || link === "Services") {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        props.onClick();
    }


    return (
        <div className={classes.SideDrawer} style={{
            transform: props.show ? "translateX(0)" : "translateX(-110%)",
        }}>
            <Logo color="#006a71" />
            <nav>
                <Links onClick={handleClick} />
            </nav>
        </div>
    )
}

export default SideDrawer;