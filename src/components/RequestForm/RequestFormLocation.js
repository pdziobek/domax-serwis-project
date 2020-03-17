import React from "react";
import {useHistory} from "react-router-dom";

const RequestFormLocation = () => {

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        history.push("/repairvisit/3");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <label htmlFor="select location">Wybierz miejsce naprawy</label>
                <label>
                     Nowy Targ
                    <input name='location' type='radio' value='Nowy Targ'/>
                </label>

                <label>
                    Zakopane
                    <input name='location' type='radio' value='Zakopane'/>
                </label>
                <label>
                    Okolice
                    <input name='location' type='radio' value='Okolice'/>
                </label>

                <label>
                    Inne
                    <input name='machine' type='radio' value='inne'/>
                </label>
                <input type="text" id="text"/>
                <button type="submit">Dalej</button>

            </form>
        </div>
    )

};

export default RequestFormLocation;