import React from "react";
import {Link} from "react-router-dom";

const DataConfirmation = () => {


    return (
        <div>
            <p>Dziękujemy za zgłoszenie. Serwisant skontaktuje się w ciągu 24 godzin.</p>
            <button><Link to="/">WRÓĆ NA STRONĘ GŁÓWNĄ SERWISU</Link></button>
        </div>
    )
};

export default DataConfirmation
