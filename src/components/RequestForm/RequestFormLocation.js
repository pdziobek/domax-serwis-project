import React, {useState}from "react";
import {useHistory} from "react-router-dom";

const RequestFormLocation = ({order, setOrder}) => {

    const [location, setLocation] = useState('NT');
    const [otherLocation, setOtherLocation] = useState('');

    const locationOnChange = (e) => {
        setLocation(e.target.value);

    };

    const otherLocationOnChange = (e) => {
        setOtherLocation(e.target.value);
    };

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie


        //wszystkie wybrane checkboxy zapisane w stanie
        //robię kopię
        let locationMapped =  location;
        //jeżeli wybrana opcja inne powody
        if (location === 'inne'){
            //dodaję nowy klucz z wartością wpisaną w text input otherReason
            locationMapped = otherLocation
        }

        setOrder( prev => ({...prev, location: locationMapped}) );
        history.push("/repairvisit/3");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <fieldset>
                <legend>Wybierz miejsce naprawy</legend>
                <label>
                    <input checked={location === "NT"} onChange={locationOnChange} name='location' type='radio' value='NT'/>
                    Nowy Targ
                </label>

                <label>
                    <input checked={location === "zakopane"} onChange={locationOnChange} name='location' type='radio' value='zakopane'/>
                    Zakopane
                </label>
                <label>
                    <input checked={location === "okolice"} onChange={locationOnChange} name='location' type='radio' value='okolice'/>
                    Okolice
                </label>

                <label>
                    <input checked={location === "inne"} onChange={locationOnChange} name='location' type='radio' value='inne'/>
                    Inne
                </label>
                {location === 'inne' &&
                <input value={otherLocation} onChange={otherLocationOnChange} type="text" id="text"/>}
                <button className='next-btn' type="submit">Dalej</button>
                    </fieldset>
            </form>
        </div>
    )

};

export default RequestFormLocation;