import React, {useState} from "react";

import CTAButton from "../../../../UI/CTAButton/CTAButton";
import Input from "../../../../UI/Input/Input";

import classes from "./ClientForm.module.css";

const ClientForm = (props) => {
    const [addressForm, setAddressForm] = useState({
        firstName: {
            elementType: "input",
            elementConfig:{
                placeholder: "First Name",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        lastName: {
            elementType: "input",
            elementConfig:{
                placeholder: "Last Name",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: "input",
            elementConfig:{
                placeholder: "Email",
                type: "email"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        phone: {
            elementType: "input",
            elementConfig:{
                placeholder: "Phone Number",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        sellersAgent: {
            elementType: "input",
            elementConfig:{
                placeholder: "Seller's Agent",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        buyersAgent: {
            elementType: "input",
            elementConfig:{
                placeholder: "Buyer's Agent",
                type: "text"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        role: {
            elementType: "input",
            elementConfig:{
                placeholder: "Your Role",
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
        <div className={classes.ClientForm}>
            <h4>Enter Your Information</h4>
            {form}
        </div>
    );
}

export default ClientForm;