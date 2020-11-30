import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./About.module.css";

const About = (props) => {
    return (
        <div id="aboutus" className={classes.About}>
            <Fade left>
                <div className={classes.ContentContainer}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/CTHRU-Florida.svg?alt=media&token=dc013eff-717b-4329-8281-95b3129fb67c" alt="Green Door and Window"/>
                    <div className={classes.Text}>
                        <h2>
                            {props.language ? 
                            "Su Inspector de Casa Central de Florida" :
                            "Your Central Florida Home Inspector"}
                        </h2>
                        <p>
                            <strong>C Thru Inspections</strong> 
                            {props.language ? 
                            " fue fundada en Florida Central para ayudar a los propietarios de viviendas o aquellos que buscan comprar una casa. Nuestro objetivo es tranquilizarlo sabiendo que su hogar será inspeccionado por un inspector profesional certificado (CPI) a través de " :
                            " was founded in Central Florida to assist home owners or those looking to purchase a home. Our goal is to put your mind at ease knowing that your home will be inspected by a Certified Professional Inspector (CPI) through "} 
                            <a className={classes.Link} target="_blank" rel="noopener noreferrer" href="https://www.nachi.org/">InterNACHI</a>
                            {props.language ?
                            ", la única escuela de inspectores de viviendas acreditada por el " :
                            ", the only home inspector school accredited by the "}
                            <a className={classes.Link} target="_blank" rel="noopener noreferrer" href="https://accet.org/">Accrediting Council for Continuing Education & Training</a> (ACCET). 
                            {props.language ?
                            " Florida tiene algunos de los climas más duros y las casas son propensas a fuertes vientos causados ​​por huracanes y tornados. Debido a esto, es mejor revisar su casa anualmente. " :
                            " Florida has some of the toughest climates, and homes are prone to high wind conditions from hurricanes and tornadoes. Because of this, it is best to get your home checked annually. "}
                            <strong>C Thru Inspections</strong> 
                            {props.language ?
                            " también tiene licencia y está asegurado. ¡Esperamos poder servirle!" :
                            " is also fully licensed and insured. We look forward to serving you!"}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default About;