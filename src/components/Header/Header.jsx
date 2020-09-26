import React from "react";

import ContactHeader from "./ContactHeader/ContactHeader";
import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <ContactHeader />
            <div className={classes.MainHeader}>
                <Logo color="#006a72" />
                <nav>
                    <Links />
                </nav>
                <ToggleButton onClick={props.onClick}/>
            </div>
        </header>
    );
}

export default Header;