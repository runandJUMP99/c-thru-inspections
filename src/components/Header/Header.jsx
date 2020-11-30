import React from "react";

import ContactHeader from "./ContactHeader/ContactHeader";
import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";
import LongLogo from "../UI/Logo/LongLogo/LongLogo";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Header.module.css";

const Header = (props) => {
    function scrollTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <header className={classes.Header}>
            <ContactHeader />
            <div className={classes.MainHeader}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div className={classes.LongLogo}>
                    <LongLogo />
                </div>
                <nav>
                    <Links language={props.language} onClick={scrollTop} />
                </nav>
                <ToggleButton onClick={props.onClick}/>
            </div>
        </header>
    );
}

export default Header;