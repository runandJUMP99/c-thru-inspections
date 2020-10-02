import React, {useState} from "react";

import CTAButton from "../../../../UI/CTAButton/CTAButton";
import Input from "../../../../UI/Input/Input";

import classes from "./HouseForm.module.css";

const HouseForm = (props) => {
    const [houseForm, setHouseForm] = useState({
        year: {
            elementType: "input",
            elementConfig:{
                placeholder: "Year Build",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        squareFeet: {
            elementType: "input",
            elementConfig:{
                placeholder: "Square Feet",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        foundation: {
            elementType: "input",
            elementConfig:{
                placeholder: "Foundation Type",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        client: {
            elementType: "input",
            elementConfig:{
                placeholder: "Client Attending",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        occupied: {
            elementType: "input",
            elementConfig:{
                placeholder: "Occupied",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        utilities: {
            elementType: "input",
            elementConfig:{
                placeholder: "Utilities",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        lockboxCode: {
            elementType: "input",
            elementConfig:{
                placeholder: "Lockbox Code",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        gateCode: {
            elementType: "input",
            elementConfig:{
                placeholder: "Gate Code",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        specialInstructions: {
            elementType: "input",
            elementConfig:{
                placeholder: "Special Instructions",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        
        for (let formElementIdentifier in houseForm) {
            formData[formElementIdentifier] = houseForm[formElementIdentifier].value;
        }

        console.log(formData);
    }

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        return isValid;
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...houseForm
        }
        
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setHouseForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];

    for (let key in houseForm) {
        formElementsArray.push({
            id: key,
            config: houseForm[key]
        });
    }

    let form = (
        <form onSubmit={handleSubmit}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)}
                    value={formElement.config.value}/>
            ))}
            <CTAButton onClick={props.onClick} disabled={!formIsValid}>Next</CTAButton>
        </form>
    );

    return (
        <div className={classes.HouseForm}>
            <h4>Enter House Information</h4>
            {form}
        </div>
    );
}

export default HouseForm;