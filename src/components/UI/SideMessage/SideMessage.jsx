import React, { useState } from "react";

import CTAButton from "../CTAButton/CTAButton";

import classes from "./SideMessage.module.css";

const SideMessage = props => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState(null);

  function handleShow() {
    setStyle("-7.25rem");
    setShow(true);
  }

  function handleHide() {
    setStyle("-19.35rem");
    setShow(false);
  }

  function handleMouseOver() {
    setStyle("-7.25rem");
  }

  function handleMouseExit() {
    setStyle("-19.35rem");
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseExit}
      className={classes.SideMessage}
      style={{ left: style }}
    >
      <div
        onClick={handleHide}
        className={classes.HiddenBackdrop}
        style={{ display: show ? "block" : "none" }}
      ></div>
      <div className={classes.Message}>
        <p>
          {props.language ? "Ahorre 10% usando" : "Save 10% by using"}
          <span className={classes.Discount}>"MILITARY10"</span>
          {props.language
            ? "al reservar su inspección!"
            : "when booking your inspection!"}
        </p>
        <CTAButton
          onClick={() => {
            handleHide();
            return window.gtag_report_conversion(
              "https://cthruinspections.com#contactus"
            );
          }}
          link="#contactus"
        >
          {props.language ? "Reservar Ahora" : "Book Now"}
        </CTAButton>
        <p className={classes.Disclaimer}>
          {props.language
            ? "*Debe mostrar prueba antes de la fecha de inspección"
            : "*Must show proof before inspection date"}
        </p>
      </div>
      <p
        onClick={handleShow}
        className={classes.MessageTab}
        style={{ left: props.language && "3.55rem" }}
      >
        {props.language ? "Descuento Militar" : "Military Discount"}
      </p>
    </div>
  );
};

export default SideMessage;
