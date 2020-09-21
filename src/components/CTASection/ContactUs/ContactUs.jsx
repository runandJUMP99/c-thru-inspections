import React, {useState} from "react";

import Input from "../../UI/Input/Input";

import classes from "./ContactUs.module.css";

const ContactUs = () => {
    const [messageForm, setMessageForm] = useState({
        name: {
            elementType: "input",
            elementConfig:{
                placeholder: "Your Name",
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
        message: {
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Description',
                rows: 4
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        
        for (let formElementIdentifier in messageForm) {
            formData[formElementIdentifier] = messageForm[formElementIdentifier].value;
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
            ...messageForm
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
        setMessageForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];

    for (let key in messageForm) {
        formElementsArray.push({
            id: key,
            config: messageForm[key]
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
            <button disabled={!formIsValid}>Submit</button>
        </form>
    );

    return (
        <div className={classes.ContactUs}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
}

export default ContactUs;