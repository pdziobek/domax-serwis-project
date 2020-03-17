import React from 'react';
import {useHistory} from "react-router-dom";

const RequestFormFinalization = () => {

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        history.push("/");
    };

    return (
        <div>
            <p>Podsumowanie zgloszenia:</p>
            <div>tutaj dane z formularzy</div>
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