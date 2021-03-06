import React, {useState} from "react";

import ContactUs from "./ContactUs/ContactUs";
import Fade from "react-reveal/Fade";
import Scheduler from "./Scheduler/Scheduler";

import classes from "./CTASection.module.css";

const CTASection = (props) => {
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
                        background: !content ? "#f4b41a" : "#b68617",
                        boxShadow: !content && "0px 2px 0 2px #b68617",
                        marginBottom: !content && "0.5rem",
                        left: 0
                    }}>{props.language ? "Programar Inspección" : "Schedule Inspection"}</li>
                    <li onClick={() => handleClick("contact")} style={{
                        background: content ? "#f4b41a" : "#b68617",
                        boxShadow: content && "0px 2px 0 2px #b68617",
                        marginBottom: content && "0.5rem",
                        right: 0
                    }}>{props.language ? "Contáctenos" : "Contact Us"}</li>
                </ul>
                <div className={classes.Content}>
                    {content ? <Scheduler language={props.language}/> : <ContactUs language={props.language}/>}
                </div>
            </Fade>
        </div>
    );
}

export default CTASection;