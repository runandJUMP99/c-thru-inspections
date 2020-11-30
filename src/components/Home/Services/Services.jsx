import React from "react";

import Fade from "react-reveal/Fade";
import Service from "./Service/Service";

import classes from "./Services.module.css";

const Services = (props) => {
    return (
        <div id="services" className={classes.Services}>
            <h1>
                {props.language ?
                "Lo Que Ofrecemos" :
                "What We Offer"}
            </h1>
            <div className={classes.ServicesGroup}>
                <Service 
                    icon={"fas fa-house-damage"} 
                    service={
                        props.language ?
                        "Inspección de viviendas" :
                        "Home Inspection"
                    } 
                    description={
                        props.language ?
                        "Para los propietarios de viviendas nuevas o existentes, las inspecciones brindan a nuestros clientes conocimiento e información sobre el estado actual de una de sus mayores inversiones." :
                        "For new or existing home owners, inspections provide our clients knowledge and information on the current state of one of their largest investments."
                    }
                />
                <Service 
                    icon={"fas fa-wind"} 
                    service={
                        props.language ?
                        "Inspección de Mitigación de Viento" :
                        "Wind Mitigation Inspection"}
                    description={
                        props.language ?
                        "Los huracanes son comunes en Florida. Esta inspección ayuda a determinar qué tan vulnerable es su casa a los vientos de alta velocidad." :
                        "Hurricanes are common in Florida. This inspection assists in determining how vulnerable your home is to high velocity winds."}
                />
                <Service 
                    icon={"fas fa-bullseye"} 
                    service={
                        props.language ?
                        "Inspección de 4 Puntos" :
                        "4-Point Inspection"} 
                    description={
                        props.language ?
                        "Descanse tranquilo sabiendo que los cuatro componentes principales de su hogar: techos, plomería, sistemas eléctricos y HVAC son seguros." :
                        "Rest easy knowing that the four major components of your home: roofing, plumbing, electrical, and HVAC systems, are secure."} 
                />
            </div>
            <Fade bottom>
                <div className={classes.Logos}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/CPI-Logo.png?alt=media&token=1c761a2d-1c00-49db-9ec6-94f915efdaec" alt="CPI Logo"/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Wind%20Mitigation-Logo.png?alt=media&token=11296278-04da-4455-aef3-fb79b780f079" alt="Wind Mitigation Logo"/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/Four%20Point-Logo.png?alt=media&token=cf4719db-2c65-471c-b284-08def6a13364" alt="Four Point Logo"/>
                </div>
            </Fade>
        </div>
    );
}

export default Services;