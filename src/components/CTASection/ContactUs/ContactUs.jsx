import React, {useState} from "react";
import emailjs from "emailjs-com";

import CTAButton from "../../UI/CTAButton/CTAButton";
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
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
    });

    const [message, setMessage] = useState("Enter your Contact Information");
    const [formIsValid, setFormIsValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        
        for (let formElementIdentifier in messageForm) {
            formData[formElementIdentifier] = messageForm[formElementIdentifier].value;
        }

        emailjs.send("default_service", "template_j8u25if", formData, process.env.REACT_APP_EMAILJS_KEY)
            .then(res => {
                const updatedMessageForm = {
                    ...messageForm
                };

                for (let key in updatedMessageForm) {
                    updatedMessageForm[key].value = "";
                }

                setMessageForm(updatedMessageForm);
                setMessage("Your message has been delivered. Thank you!");
            }, err => {
                console.log('FAILED...', err);

                const updatedMessageForm = {
                    ...messageForm
                };

                for (let key in updatedMessageForm) {
                    updatedMessageForm[key].value = "";
                }

                setMessageForm(updatedMessageForm);
                setMessage("Uh oh! There was an error delivering your message. Please try again.");
            });
    }

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        return isValid;
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedMessageForm = {
            ...messageForm
        }
        
        const updatedFormElement = {
            ...updatedMessageForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedMessageForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        for (let inputIdentifier in updatedMessageForm) {
            formIsValid = updatedMessageForm[inputIdentifier].valid && formIsValid;
        }
        setMessageForm(updatedMessageForm);
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
            <CTAButton disabled={!formIsValid}>Submit</CTAButton>
        </form>
    );

    return (
        <div className={classes.ContactUs}>
            <h4>{message}</h4>
            {form}
        </div>
    );
}

export default ContactUs;