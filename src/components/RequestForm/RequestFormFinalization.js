import React from 'react';
import {useHistory} from "react-router-dom";


//ORDER:
// inputAddress
//
// inputName
//
// inputNumber
//
// location:"okolice"
// machine:"lodówka"
// meetingTime:""
//
// reason : {issue2: true}


const RequestFormFinalization = ({order}) => {

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        history.push("/");
    };
    const getLocationDescription = (location) => {
        switch(location) {
            case 'NT': {
                return "NowyTarg"
            }


        }

    };

    return (
        <div>
            <p>Podsumowanie zgloszenia:</p>
            <div>tutaj dane z formularzy</div>
            <div>Urządzenie do naprawy: {order.machine}</div>
            <div>Miejscowość: {getLocationDescription( order.location)}</div>
            <div>Problem/y z urządzeniem:</div>
            <ul>
                { order.reason.issue1 && <li>Nie włącza się</li>}
                { order.reason.issue2 && <li>Hałasuje</li>}
                { order.reason.issue3 && <li>Włącza się ale nie reaguje</li>}
                { order.reason.issue4 && <li>Wyświetlacz nie włącza się</li>}
                { order.reason.otherReason && <li>{order.reason.otherReason}</li>}
            </ul>


            <div>Imię i nazwisko zgłaszającego: {order.inputName}</div>
            <div>Adres wizyty serwisowej: {order.inputAddress}</div>
            <div>Numer kontaktowy: {order.inputNumber}</div>
            <div>Preferowany czas wizyty serwisowej {order.meetingTime}</div>
            <button type="submit">Zgłoś zlecenie naprawy</button>
        </div>

    )

    return (
        <div>
        <p>Dziękujemy za zgłoszenie. Serwisant skontaktuje się w ciągu 24 godzin.</p>
        <button onClick={validation}>Wróć na stronę główną serwisu</button>
        </div>
    )

};

export default RequestFormFinalization