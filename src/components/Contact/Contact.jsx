import React, {useState} from "react";

import Scheduler from "../CTASection/Scheduler/Scheduler";
import ContactUs from "../CTASection/ContactUs/ContactUs";

import classes from "./Contact.module.css";

const Contact = (props) => {
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
            <h1>
                {props.language ?
                "Contáctenos o Programe Su Inspección" :
                "Contact Us or Schedule Your Inspection"}
            </h1>
            <p>
                {props.language ?
                "Envíenos un correo electrónico con cualquier consulta o llame al (407) 813-5064. Estaremos más que felices de responder a sus preguntas o programar una inspección con usted. ¡Esperamos tener noticias tuyas!" :
                "Email us with any inquiries or call (407) 813-5064. We would be more than happy to answer your questions or set up an inspection with you. We are looking forward to hearing from you!"}
            </p>
            <ul>
                <li onClick={() => handleClick("contact")} style={{
                    background: !content ? "#f4b41a" : "#b68617",
                    boxShadow: !content && "0px 2px 0 2px #b68617",
                    marginBottom: !content && "0.5rem",
                    left: 0
                }}>{props.language ? "Contáctenos" : "Contact Us"}</li>
                <li onClick={() => handleClick("schedule")} style={{
                    background: content ? "#f4b41a" : "#b68617",
                    boxShadow: content && "0px 2px 0 2px #b68617",
                    marginBottom: content && "0.5rem",
                    right: 0
                }}>{props.language ? "Programar Inspección" : "Schedule Inspection"}</li>
            </ul>
            <div className={classes.Content}>
                {content ? <ContactUs language={props.language}/> : <Scheduler language={props.language}/>}
            </div>
        </div>
    );
}

export default Contact