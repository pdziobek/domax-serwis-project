import React from 'react';
import { useHistory } from "react-router-dom";


const RequestFormMachine = () => {

    const history = useHistory();
    const validation = (e) => {
      e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        history.push("/repairvisit/2/");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <label htmlFor="select machine">Wybierz rodzaj sprzętu do naprawy</label>
               <label>
                   Pralka
                   <input name='machine' type='radio' value='pralka'/>
               </label>
                <label>
                    Zmywarka
                <input name='machine' type='radio' value='zmywarka'/>
                </label>
                <label>
                    Lodówka
                <input name='machine' type='radio' value='lodówka'/>
                </label>
                <label>
                    Ekspres do kawy
                <input name='machine' type='radio' value='ekspres'/>
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


export default  RequestFormMachine;
