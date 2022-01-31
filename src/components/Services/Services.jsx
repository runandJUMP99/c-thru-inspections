import React from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

import Bundle from "./Bundle/Bundle";
import CTASection from "../CTASection/CTASection";
import Intro from "./Intro/Intro";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = props => {
  function scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className={classes.Services}>
      <Intro language={props.language} />
      <div className={classes.ServiceGroup}>
        <Service
          language={props.language}
          title={props.language ? "Inspección de Viviendas" : "Home Inspection"}
          icon="fas fa-house-damage"
          startingAt={props.langauge ? "A Partir de:" : "Starting at: "}
          price="300"
          description={
            props.language
              ? "Una Inspección de La Vivienda es un examen no invasivo del estado de la vivienda. Nuestra Inspección de Vivienda consiste en inspeccionar los componentes más importantes de una vivienda, como los cimientos, armazón y techo, entre otros. Las inspecciones de viviendas suelen tardar entre 2 y 3 1/2 horas."
              : "A Home Inspection is a non-invasive examination of the condition of the home. Our Home Inspection consists of inspecting the most important components of a home, such as the foundation, frame, and roof, among others. Home Inspections typically take between 2 to 3 1/2 hours."
          }
        />
        <Service
          language={props.language}
          title={
            props.language
              ? "Inspección de Mitigación de Viento"
              : "Wind Mitigation Inspection"
          }
          icon="fas fa-wind"
          price="80"
          description={
            props.language
              ? "Una Inspección de Mitigación de Viento, también llamada Inspección de Mitigación de Tormenta de Viento, es cuando un inspector certificado verifica las características de resistencia al viento de su casa. Aunque no se requiere una inspección de mitigación del viento para obtener el seguro de propietarios de viviendas de Florida, puede resultar en ahorros sustanciales para su hogar."
              : "A Wind Mitigation inspection, also called a Windstorm Mitigation Inspection, is when a Certified Inspector checks your home's wind resistant features. Though a wind mitigation inspection is not required to get for Florida Homeowners Insurance, it can result in substantial savings for your household."
          }
        />
        <Service
          language={props.language}
          title={
            props.language ? "Inspección de 4 Puntos" : "4-Point Inspection"
          }
          icon="fas fa-bullseye"
          price="90"
          description={
            props.language
              ? "Una Inspección de 4 Puntos examina los cuatro sistemas principales de su hogar: techo, electricidad, plomería y HVAC. Una compañía de seguros quiere saber que su hogar ha recibido un buen mantenimiento y que los sistemas principales están en buenas condiciones y funcionan."
              : "A 4-Point Inspection looks at the four major systems of your home: roof, electrical, plumbing, and HVAC. An insurance company wants to know that your home has been well maintained and the major systems are in solid, working condition."
          }
        />
        <Fade>
          <div>
            <h1 className={classes.ExplanationHeader}>
              {props.language
                ? "Qué Esperar De La Inspección De Su Casa"
                : "What To Expect From Your Home Inspection"}
            </h1>
            <p className={classes.Explanation}>
              {props.language ? "Con " : "With "}
              <strong>C Thru Inspections</strong>
              {props.language
                ? ", espere que su hogar sea atendido por un inspector profesional totalmente certificado que utilice el equipo y el software más actualizados para evaluar los componentes más importantes de su hogar. Nuestros inspectores revisarán los elementos vitales, como los cimientos estructurales, los peligros de seguridad y las partes de su hogar que puedan requerir mantenimiento para evitar daños futuros."
                : ", expect that your home will be serviced by a fully certified, professional inspector using the most up-to-date equipment and software to evaluate the most important components of your home. Our inspectors will look over vital elements, such as the structural foundation, safety hazards, and parts of your home that may require maintenance to avoid future damage."}
              <br />
              <br />
              <strong>C Thru Inspections</strong>
              {props.language
                ? " también proporciona informes completos y fáciles de entender que estarán disponibles dentro de las 24 horas posteriores a la inspección. Nuestros inspectores también practicarán el distanciamiento social seguro y usarán Equipo de Protección Personal para su comodidad. ¿Todavía tiene preguntas sobre su inspección? ¡No dude en "
                : " also provides full, easy to understand reports that will be available to you within 24 hours of your inspection. Our inspectors will also practice safe, social distancing and wear Personal Protective Equipment (PPE) for your comfort. Still have questions about your inspection? Feel free to "}
              <span className={classes.Link}>
                <NavLink onClick={scrollTop} to="/contactus">
                  {props.language ? "contáctenos!" : "contact us!"}
                </NavLink>
              </span>
              {props.language
                ? " Estaremos más que felices de ayudarlo en todo lo que podamos. ¡Esperamos con interés trabajar con usted!"
                : " We will be more than happy to assist in any way we can. We look forward to working with you!"}
            </p>
          </div>
        </Fade>
      </div>
      <Bundle language={props.language} />
      <CTASection language={props.language} />
    </div>
  );
};

export default Services;
