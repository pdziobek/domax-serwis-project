import React, {useState} from 'react';
import {useHistory} from "react-router-dom";


const RequestFormMachine = ({order, setOrder}) => {

    const [machine, setMachine] = useState('pralka');
    const [otherMachine, setOtherMachine] = useState('');


    const machineOnChange = (e) => {
        setMachine(e.target.value);
    };

    const otherMachineOnChange = (e) => {
        setOtherMachine(e.target.value);
    };

    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirect
        //przekieroqwanie
        setOrder( prev => ({...prev,  machine: machine }) );
        history.push("/repairvisit/2/");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <label htmlFor="select machine">Wybierz rodzaj sprzętu do naprawy</label>
                <label>
                    Pralka
                    <input checked={machine === "pralka"}
                           onChange={machineOnChange} name='machine' type='radio' value='pralka'/>
                </label>
                <label>
                    Zmywarka
                    <input checked={machine === "zmywarka"} onChange={machineOnChange} name='machine' type='radio'
                           value='zmywarka'/>
                </label>
                <label>
                    Lodówka
                    <input checked={machine === "lodówka"} onChange={machineOnChange} name='machine' type='radio'
                           value='lodówka'/>
                </label>
                <label>
                    Ekspres do kawy
                    <input checked={machine === "ekspres"} onChange={machineOnChange} name='machine' type='radio'
                           value='ekspres'/>
                </label>
                <label>
                    Inne
                    <input checked={machine === "inne"} onChange={machineOnChange} name='machine' type='radio'
                           value='inne'/>
                </label>
                {machine === 'inne' &&
                <input value={otherMachine} onChange={otherMachineOnChange} type="text" id="text"/>}
                <button type="submit">Dalej</button>
            </form>
        </div>
    )

};


export default RequestFormMachine;


// {machine === 'inne' ?
// <input value={otherMachine} onChange={otherMachineOnChange} type="text" id="text"/>
//
// :
//null
// }
// <button type="submit">Dalej</button>