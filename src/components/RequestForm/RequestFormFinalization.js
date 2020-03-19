import React from 'react';
import {useHistory} from "react-router-dom";
import Order from "../Order/Order";


const RequestFormFinalization = ({order}) => {

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
            })
            .catch(error => {
                console.log(error);
            });
    };


    //stworzyc komponent Order ktory dostaje w propsach order,
    return (
        <div>
            <Order/>
            <button onClick={saveDataOnServer} type="submit">Zgłoś zlecenie naprawy</button>
        </div>

    )

    return (
        <div>
        <p>Dziękujemy za zgłoszenie. Serwisant skontaktuje się w ciągu 24 godzin.</p>
        <button >Wróć na stronę główną serwisu</button>
        </div>
    )



};

export default RequestFormFinalization