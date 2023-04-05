import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = props => {
  return (
    <div id="home" className={classes.Jumbotron}>
      <div className={classes.Carousel}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="7000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className={classes.Image1}>
                <div className={classes.Text}>
                  <h1>
                    {props.language
                      ? "SU INSPECTOR DE CASA CENTRAL DE FLORIDA"
                      : "YOUR CENTRAL FLORIDA HOME INSPECTOR"}
                  </h1>
                  <p>
                    {props.language
                      ? "Tome la decisión inteligente haciendo que su casa sea inspeccionada anualmente."
                      : "Make the smart choice by having your home inspected annually."}
                  </p>
                  <CTAButton
                    link="#contactus"
                    onClick={() =>
                      window.gtag_report_conversion(
                        "https://cthruinspections.com#contactus"
                      )
                    }
                  >
                    {props.language
                      ? "Programar Su Inspección"
                      : "Schedule Your Inspection"}
                  </CTAButton>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={classes.Image2}>
                <div className={classes.Text}>
                  <h1>
                    {props.language
                      ? "Inspección de Viviendas Nuevas"
                      : "New Home Inspection"}
                  </h1>
                  <p>
                    {props.language
                      ? "¿Está buscando comprar una casa? Permítanos asegurarnos de que esté a la altura de sus estándares."
                      : "Looking to buy a home? Allow us make sure it's up to your standards."}
                  </p>
                  <CTAButton
                    link="#contactus"
                    onClick={() =>
                      window.gtag_report_conversion(
                        "https://cthruinspections.com#contactus"
                      )
                    }
                  >
                    {props.language
                      ? "Programar Su Inspección"
                      : "Schedule Your Inspection"}
                  </CTAButton>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={classes.Image3}>
                <div className={classes.Text}>
                  <h1>
                    {props.language
                      ? "Inspección de Mitigación de Viento"
                      : "Wind Mitigation Inspection"}
                  </h1>
                  <p>
                    {props.language
                      ? "Descubra cómo esta inspección puede ayudarlo a ahorrar dinero!"
                      : "Learn how this inspection could help you save money!"}
                  </p>
                  <CTAButton
                    link="#contactus"
                    onClick={() =>
                      window.gtag_report_conversion(
                        "https://cthruinspections.com#contactus"
                      )
                    }
                  >
                    {props.language
                      ? "Programar Su Inspección"
                      : "Schedule Your Inspection"}
                  </CTAButton>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={classes.Image4}>
                <div className={classes.Text}>
                  <h1>
                    {props.language ? "Servicio Superior" : "Superior Service"}
                  </h1>
                  <p>
                    {props.language
                      ? "Inspecciones de calidad. Precios asequibles."
                      : "Quality inspections. Affordable prices."}
                  </p>
                  <CTAButton
                    link="#contactus"
                    onClick={() =>
                      window.gtag_report_conversion(
                        "https://cthruinspections.com#contactus"
                      )
                    }
                  >
                    {props.language
                      ? "Programar Su Inspección"
                      : "Schedule Your Inspection"}
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
