import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Fade from "react-reveal/Fade";

import classes from "./Bundle.module.css";

const Bundle = props => {
  return (
    <div className={classes.Bundle}>
      <Fade right>
        <div className={classes.Text}>
          <h1>
            {props.language
              ? "Combo de Inspección de Seguros"
              : "Insurance Inspection Combo"}
          </h1>
          <p className={classes.Description}>
            {props.language
              ? "Combine una Inspección de Mitigación del Viento y una Inspección de 4 Puntos por solo"
              : "Combine a Wind Mitigation Inspection and 4-Point Inspection for only"}
          </p>
          <h1>$175</h1>
          <CTAButton
            link="#contactus"
            onClick={() =>
              window.gtag_report_conversion("https://cthruinspections.com")
            }
          >
            {props.language ? "Reserve Su Inspección" : "Book Your Inspection"}
          </CTAButton>
          <p className={classes.Disclaimer}>
            {props.language
              ? "*Los precios pueden variar según la distancia de viaje y los pies cuadrados de la casa"
              : "*Prices may vary depending on travel distance and square footage of home"}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Bundle;
