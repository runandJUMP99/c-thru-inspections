import React, {useState} from "react";

import ContactUs from "./ContactUs/ContactUs";
import Scheduler from "./Scheduler/Scheduler";

import classes from "./CTASection.module.css";

const CTASection = () => {
    const [content, setContent] = useState(true);

    function handleClick(selection) {
        if (selection === "contact") {
            setContent(true);
        } else if (selection === "schedule") {
            setContent(false)
        }
    }

    return (
        <div className={classes.CTASection}>
            <ul>
                <li onClick={() => handleClick("contact")} style={{
                    background: content && "#ff7e67",
                    color: content && "#ecf4f3",
                }}>Contact Us</li>
                <li onClick={() => handleClick("schedule")} style={{
                    background: !content && "#ff7e67",
                    color: !content && "#ecf4f3",
                }}>Schedule Inspection</li>
            </ul>
            {content ? <ContactUs /> : <Scheduler />}
        </div>
    );
}

export default CTASection;