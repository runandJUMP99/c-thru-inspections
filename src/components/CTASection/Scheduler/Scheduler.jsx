import React, {useState} from "react";

import AddressForm from "./AddressForm/AddressForm";
import ClientForm from "./ClientForm/ClientForm";
import HouseForm from "./HouseForm/HouseForm";

import classes from "./Scheduler.module.css";

const Scheduler = () => {
    const forms = [<AddressForm onClick={handleClick}/>, <ClientForm onClick={handleClick}/>, <HouseForm onClick={handleClick}/>]
    const [currentForm, setCurrentForm] = useState(0);
    const [formData, setFormData] = useState([]);

    function handleClick(data) {
        setFormData(prevData => prevData.concat(data));
        setCurrentForm(prevValue => prevValue + 1);
    }
    // console.log(formData);
    
    return (
        <div className={classes.Scheduler}>
            <h1>Coming Soon!</h1>
            {/* {forms[currentForm]} */}
        </div>
    );
}

export default Scheduler;