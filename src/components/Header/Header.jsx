import React from "react";

import Links from "./Links/Links";
import Logo from "./Logo/Logo";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <Logo />
            <nav>
                <Links />
            </nav>
            <ToggleButton onClick={props.onClick}/>
        </div>
    );
}

export default Header;