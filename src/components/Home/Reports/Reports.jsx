import React from "react";

import Fade from "react-reveal/Fade";

import classes from "./Reports.module.css";

const Reports = (props) => {
    return (
        <div className={classes.Reports}>
            <Fade right>
                <div className={classes.ContentContainer}>
                    <div className={classes.Text}>
                        <h2>
                            {props.language ? 
                            "Informes Detallados de Inspección de Viviendas" :
                            "Detailed Home Inspection Reports"}
                        </h2>
                        <p>
                            <strong>C Thru Inspections</strong>
                            {props.language ?
                            " proporciona informes detallados de todas nuestras inspecciones. Utilizamos las aplicaciones más actualizadas que nos permiten navegar por la casa y desglosar algunos de los componentes más importantes de su hogar. Esto nos brinda la capacidad de entregarle un informe de inspección detallado que puede ver fácilmente desde su computadora, tableta o teléfono inteligente en un plazo de 24 a 48 horas y, a veces, incluso en el mismo día." :
                            " provides detailed reports for all of our inspections. We utilize the most up to date applications that allow us to navigate through the house and break down some of the most important components of your home. This provides us the ability to deliver you a detailed inspection report that you can easily view from your computer, tablet, or smartphone within 24-48 hours, and sometimes even within the same day!"}
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.spectora.com/home-inspectors/c-thru-inspections-llc/sample_report?sample_id=6152">{props.language ? "Ver Informe de Muestra" : "View Sample Report"}</a>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/c-thru-inspections.appspot.com/o/ReportsImg%402x.png?alt=media&token=854c7420-464f-424c-b146-20019ad5e1c4" alt="Reports"/>
                </div>
            </Fade>
        </div>
    );
}

export default Reports;