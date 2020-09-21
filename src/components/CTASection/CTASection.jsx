import React, {useState} from "react";

import ContactUs from "./ContactUs/ContactUs";
import Scheduler from "./Scheduler/Scheduler";

import classes from "./CTASection.module.css";

const CTASection = () => {
    const [content, setContent] = useState(<ContactUs />);

    function handleClick(selection) {
        if (selection === "contact") {
            setContent(<ContactUs />);
        } else if (selection === "schedule") {
            setContent(<Scheduler />)
        }
    }

    return (
        <div className={classes.CTASection}>
            <ul>
                <li onClick={() => handleClick("contact")} style={{
                    background: content.type.name === "ContactUs" && "#ff7e67",
                    color: content.type.name === "ContactUs" && "#ecf4f3",
                }}>Contact Us</li>
                <li onClick={() => handleClick("schedule")} style={{
                    background: content.type.name !== "ContactUs" && "#ff7e67",
                    color: content.type.name !== "ContactUs" && "#ecf4f3",
                }}>Schedule Inspection</li>
            </ul>
            {content}
        </div>
    );
}

export default CTASection;