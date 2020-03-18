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
            case  "NT": {
                return "NowyTarg"
            }
            case "zakopane": {
                return "Zakopane"
            }
            case "okolice": {
                return "Okolice Zakopanego i Nowego Targu"
            }

            default:
                return location;

        }

    };

    const getMachineDescription = (machine) => {
        switch(machine) {
            case "pralka": {
                return "Pralka"
            }
            case "zmywarka": {
                return "Zmywarka"
            }
            case "lodówka": {
                return "Lodówka"
            }
            case "ekspres": {
                return "Ekspres do kawy"
            }

            default:
                return machine
        }
    };

    const getMeetingTime = ( time ) => {

        switch(time) {
            case "morning": {
                return "Rano: od 8:00 do 11:00"
            }
            case "noon": {
                return "Południe: od 11:00 do 13:00"
            }
            case "afternoon": {
                return "Popołudnie: od 13:00 do 17:00"
            }
            case "evening": {
                return "Wieczór: od 17:00 do 20:00"
            }
            case "night": {
                return "Noc: od 20:00 do 23:00 - usługa premium"
            }
        }
        return 'jutro'
    }

    return (
        <div>
            <h2>Podsumowanie zgloszenia:</h2>
            <div>Urządzenie do naprawy: <br/> {getMachineDescription( order.machine)}</div>
            <div>Miejscowość: <br/> {getLocationDescription( order.location)}</div>
            <div>Problem/y z urządzeniem:</div>
            <ul>
                { order.reason.issue1 && <li>Nie włącza się</li>}
                { order.reason.issue2 && <li>Hałasuje</li>}
                { order.reason.issue3 && <li>Włącza się ale nie reaguje</li>}
                { order.reason.issue4 && <li>Wyświetlacz nie włącza się</li>}
                { order.reason.otherReason && <li>{order.reason.otherReason}</li>}
            </ul>


            <div>Imię i nazwisko zgłaszającego: <br/> {order.inputName}</div>
            <div>Adres wizyty serwisowej: <br/> {order.inputAddress}</div>
            <div>Numer kontaktowy: <br/> {order.inputNumber}</div>
            <div>Preferowany czas wizyty serwisowej: <br/> {getMeetingTime(order.meetingTime)}</div>
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