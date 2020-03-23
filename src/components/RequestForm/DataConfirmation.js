import React from "react";
import {Link} from "react-router-dom";


const DataConfirmation = () => {


    return (
        <fieldset className='data-confirmation'>
            <legend>Dziękujemy za zgłoszenie.</legend>
            <p>Serwisant skontaktuje się w ciągu 24 godzin.</p>
            <button className='next-btn'><Link className='link-button' to="/">WRÓĆ NA STRONĘ GŁÓWNĄ SERWISU</Link></button>
        </fieldset>
    )
};

export default DataConfirmation
