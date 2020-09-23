import React, {useState} from "react";

import AddressForm from "./AddressForm/AddressForm";
import ClientForm from "./ClientForm/ClientForm";
import HouseForm from "./HouseForm/HouseForm";

import classes from "./Scheduler.module.css";

const Scheduler = () => {
    const forms = [<AddressForm onClick={handleClick}/>, <ClientForm onClick={handleClick}/>, <HouseForm onClick={handleClick}/>]
    const [currentForm, setCurrentForm] = useState(0)

    function handleClick() {
        setCurrentForm(prevValue => prevValue + 1);
    }

    return (
        <div className={classes.Scheduler}>
            {forms[currentForm]}
        </div>
    );
}

export default Scheduler;