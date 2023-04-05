import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Intro.module.css";

const Intro = props => {
  return (
    <div className={classes.Intro}>
      <div className={classes.Filter}></div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/home-2861604_1920.jpg?alt=media&token=ea9cb7b8-c042-46bc-95b6-662f1c5fa997"
        alt="Home With Ladder"
      />
      <div className={classes.Text}>
        <h1>
          {props.language ? "Servicios de Inspección" : "Inspection Services"}
        </h1>
        <p>
          {props.language
            ? "Los inspectores de viviendas brindan a sus clientes garantías sobre la seguridad y las funciones de su hogar. Nuestros inspectores siguen las "
            : "Home Inspectors provide their customers assurance with the safety and functions of their home. Our inspectors follow the "}
          <a
            className={classes.Link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://s3.amazonaws.com/uploads-east-1.nachi.org/page-uploads%2F2020%2F03%2F1584478818326-Home+Inspection+Standards+of+Practice.pdf"
          >
            InterNACHI{" "}
            {props.language ? "Normas de Práctica" : "Standards of Practice"}
          </a>
          {props.language
            ? ", que es la asociación líder mundial de inspectores de viviendas. Nuestros inspectores profesionales certificados se esfuerzan por mantenerse al día con las nuevas tecnologías emergentes para lograr un trabajo de calidad en cada hogar. Ya sea que esté buscando hacer una inspección de 4 puntos, mitigación de viento o una casa: ¡Lo tenemos cubierto!"
            : ", which is the world's leading association for home inspectors. Our Certified Professional Inspectors (CPI) strive to keep up with new, emerging technologies to accomplish quality work on every home. Whether you are looking to do a 4-Point, Wind Mitigation, or a Home Inspection, we've got you covered!"}
        </p>
        <CTAButton
          link="#contactus"
          onClick={() =>
            window.gtag_report_conversion(
              "https://cthruinspections.com/services#contactus"
            )
          }
        >
          {props.language
            ? "Programe Su Inspección"
            : "Schedule Your Inspection"}
        </CTAButton>
      </div>
    </div>
  );
};

export default Intro;
