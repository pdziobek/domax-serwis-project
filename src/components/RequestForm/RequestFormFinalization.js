import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Order from "../Order/Order";
import DataConfirmation from "./DataConfirmation";

import './style.scss'

const RequestFormFinalization = ({order}) => {

    const [showConfirmation, setShowConfirmation] = useState(false);



    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        history.push("/");
    };

    const saveDataOnServer = (e) => {
        fetch('http://localhost:4000/orders', {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setShowConfirmation( true )
            })
            .catch(error => {
                console.log(error);
            });


    };

    if (showConfirmation) {
        return <DataConfirmation/>
    }

    //stworzyc komponent Order ktory dostaje w propsach order,
    return (
        <div>
            <fieldset className='data-confirmation'>
            <legend>Podsumowanie zgloszenia:</legend>
            <Order  order={order}/>
            <button className='next-btn' onClick={saveDataOnServer}  type="submit">Zgłoś zlecenie naprawy</button>
            </fieldset>
        </div>

    )



};

export default RequestFormFinalization