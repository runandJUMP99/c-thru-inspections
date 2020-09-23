import React, {useState} from "react";

import CTAButton from "../../../UI/CTAButton/CTAButton";
import Input from "../../../UI/Input/Input";

import classes from "./AddressForm.module.css";

const AddressForm = (props) => {
    const [addressForm, setAddressForm] = useState({
        street: {
            elementType: "input",
            elementConfig:{
                placeholder: "Street Address",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        city: {
            elementType: "input",
            elementConfig:{
                placeholder: "City",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        state: {
            elementType: "input",
            elementConfig:{
                placeholder: "State",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zip: {
            elementType: "input",
            elementConfig:{
                placeholder: "Zip Code",
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
        
        for (let formElementIdentifier in addressForm) {
            formData[formElementIdentifier] = addressForm[formElementIdentifier].value;
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
            ...addressForm
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
        setAddressForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];

    for (let key in addressForm) {
        formElementsArray.push({
            id: key,
            config: addressForm[key]
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
        <div className={classes.AddressForm}>
            <h4>Enter Your Address</h4>
            {form}
        </div>
    );
}

export default AddressForm;