import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Fade from "react-reveal/Fade";

import classes from "./Service.module.css";

const Service = props => {
  return (
    <Fade bottom>
      <div className={classes.Service}>
        <h2>{props.title}</h2>
        <i className={props.icon}></i>
        <p>{props.description}</p>
        <h3>
          <p className={classes.StartingAt}>{props.startingAt}</p>${props.price}
        </h3>
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
  );
};

export default Service;
