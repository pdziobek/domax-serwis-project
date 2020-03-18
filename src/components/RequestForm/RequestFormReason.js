import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const RequestFormReason = ({order, setOrder}) => {

    const [reason, setReason] = useState({});
    const [otherReason, setOtherReason] = useState('');

    const reasonOnChange = ({target:{name, checked}}) => {
        setReason(prev => ({...prev,  [name] : checked}) )
    };

    const otherReasonOnChange = (e) => {
        setOtherReason(e.target.value);
    };

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie


        //wszystkie wybrane checkboxy zapisane w stanie
        //robię kopię
        const reasonMapped = {...reason};
        //jeżeli wybrana opcja inne powody
        if (reason.inne){
            //dodaję nowy klucz z wartością wpisaną w text input otherReason
            reasonMapped.otherReason = otherReason
        }


        setOrder(prev => ({...prev, reason: reasonMapped }) );
        history.push("/repairvisit/4");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <label htmlFor="select issue">Wybierz lub opisz objawy:</label>

                <div>

                    <label>
                        <input checked={reason.issue1 || false} onChange={reasonOnChange} type="checkbox" name="issue1"/>nie włącza się;
                    </label><br/>

                    <label>
                        <input checked={reason.issue2 || false} onChange={reasonOnChange} type="checkbox" name="issue2"/>hałasuje;
                    </label><br/>

                    <label>
                        <input checked={reason.issue3 || false} onChange={reasonOnChange} type="checkbox" name="issue3"/>włącza się ale nie reaguje;
                    </label><br/>

                    <label>
                        <input checked={reason.issue4 || false} onChange={reasonOnChange} type="checkbox" name="issue4"/>wyświetlacz nie włącza się;
                    </label><br/>
                </div>

                <div>
                    <label>
                        <input checked={reason.inne || false} onChange={reasonOnChange} type='checkbox' name='inne'/>Inne:
                    </label>
                    {reason.inne &&
                    <input value={otherReason} onChange={otherReasonOnChange} type="text" id="text"/>}
                    <button type="submit">Dalej</button>

                </div>
            </form>
        </div>

)

};



export default RequestFormReason