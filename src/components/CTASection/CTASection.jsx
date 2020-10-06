import React, {useState} from "react";

import ContactUs from "./ContactUs/ContactUs";
import Fade from "react-reveal/Fade";
import Scheduler from "./Scheduler/Scheduler";

import classes from "./CTASection.module.css";

const CTASection = () => {
    const [content, setContent] = useState(true);

    function handleClick(selection) {
        if (selection === "schedule") {
            setContent(true);
        } else if (selection === "contact") {
            setContent(false)
        }
    }

    return (
        <div id="contactus" className={classes.CTASection}>
            <Fade>
                <ul>
                    <li onClick={() => handleClick("schedule")} style={{
                        background: content && "#ff7e67",
                        color: content && "white",
                    }}>Schedule Inspection</li>
                    <li onClick={() => handleClick("contact")} style={{
                        background: !content && "#ff7e67",
                        color: !content && "white",
                    }}>Contact Us</li>
                </ul>
                <div className={classes.Content}>
                    {content ? <Scheduler /> : <ContactUs />}
                </div>
            </Fade>
        </div>
    );
}

export default CTASection;