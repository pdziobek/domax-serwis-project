import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const RequestFormVisitDetails = ({order, setOrder}) => {

    const [inputName, setInputName] = useState('');
    const inputNameOnChange = (e) => {
        setInputName(e.target.value)
    };

    const [inputAddress, setInputAddress] = useState('');
    const inputAddressOnChange = (e) => {
        setInputAddress(e.target.value)
    };

    const [inputNumber, setInputNumber] = useState('');
    const inputNumberOnChange = (e) => {
        setInputNumber(e.target.value)
    };

    const [meetingTime, setMeetingTime] = useState('');
    const meetingTimeOnChange = (e) => {
        setMeetingTime(e.target.value)
    };

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        setOrder( prev => ({...prev, inputName: inputName, inputAddress: inputAddress, inputNumber: inputNumber, meetingTime: meetingTime}) );
        history.push("/repairvisit/5");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input value={inputName} onChange={inputNameOnChange} type="text" id="text"/>


                <label htmlFor="address">Adres wizyty serwisowej</label>
                <input value={inputAddress} onChange={inputAddressOnChange} type="text" id="text"/>


                <label htmlFor="number">Numer telefonu do potwierdzenia wizyty</label>
                <input value={inputNumber} onChange={inputNumberOnChange} type="number" id="number"/>


                <label htmlFor="meeting time">Preferowany czas wizyty serwisowej</label>
                <select value={meetingTime} onChange={meetingTimeOnChange} name="time">
                    <option value="morning">Rano: od 8:00 do 11:00</option>
                    <option value="noon">Południe: od 11:00 do 13:00</option>
                    <option value="afternoon">Popołudnie: od 13:00 do 17:00</option>
                    <option value="evening">Wieczór: od 17:00 do 20:00</option>
                    <option value="night">Noc: od 20:00 do 23:00 - usługa premium</option>
                </select>


                <button type="submit">Dalej</button>
            </form>
        </div>
    )

};

export default RequestFormVisitDetails