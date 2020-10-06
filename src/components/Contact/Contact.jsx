import React, {useState} from "react";

import Scheduler from "../CTASection/Scheduler/Scheduler";
import ContactUs from "../CTASection/ContactUs/ContactUs";

import classes from "./Contact.module.css";

const Contact = () => {
    const [content, setContent] = useState(true);

    function handleClick(selection) {
        if (selection === "contact") {
            setContent(true);
        } else if (selection === "schedule") {
            setContent(false)
        }
    }

    return (
        <div className={classes.Contact}>
            <ul>
                <li onClick={() => handleClick("contact")} style={{
                    background: content && "#f4b41a",
                    color: content && "white",
                }}>Contact Us</li>
                <li onClick={() => handleClick("schedule")} style={{
                    background: !content && "#f4b41a",
                    color: !content && "white",
                }}>Schedule Inspection</li>
            </ul>
            <div className={classes.Content}>
                {content ? <ContactUs /> : <Scheduler />}
            </div>
        </div>
    );
}

export default Contact