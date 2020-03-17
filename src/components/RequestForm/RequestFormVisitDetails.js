import React from 'react';

const RequestFormVisitDetails = () => {

    return (
        <div>
            <form>
                <label htmlFor="name">Imię i nazwisko</label>
                <input type="text" id/>

                <label htmlFor="address">Adres wizyty serwisowej</label>
                <input type="text"/>

                <label htmlFor="number">Numer telefonu do potwierdzenia wizyty</label>
                <input type="number"/>

                <label htmlFor="meeting time">Preferowany czas wizyty serwisowej</label>
                <select name="time">
                    <option value="morning">Rano: od 8:00 do 11:00</option>
                    <option value="noon">Południe: od 11:00 do 13:00</option>
                    <option value="afternoon">Popołudnie: od 13:00 do 17:00</option>
                    <option value="evening">Wieczór: od 17:00 do 20:00</option>
                    <option value="night">Noc: od 20:00 do 23:00 - usługa premium</option>
                </select>

                <button type="submit">Zgłoś zlecenie naprawy</button>
            </form>
        </div>
    )

};

export {RequestFormVisitDetails}