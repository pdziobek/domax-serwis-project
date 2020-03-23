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


        let machineMapped = machine;
        if(machine === 'inne'){
            machineMapped = otherMachine
        }


        setOrder( prev => ({...prev,  machine: machineMapped }) );
        history.push("/repairvisit/2/");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <fieldset>
                    <legend> Wybierz rodzaj sprzętu do naprawy </legend>
                    <label>
                        <input checked={machine === "pralka"}
                               onChange={machineOnChange} name='machine' type='radio' value='pralka'/>
                        Pralka
                    </label>
                    <label>
                        <input checked={machine === "zmywarka"} onChange={machineOnChange} name='machine' type='radio'
                               value='zmywarka'/>
                        Zmywarka
                    </label>
                    <label>
                        <input checked={machine === "lodówka"} onChange={machineOnChange} name='machine' type='radio'
                               value='lodówka'/>
                        Lodówka
                    </label>
                    <label>
                        <input checked={machine === "ekspres"} onChange={machineOnChange} name='machine' type='radio'
                               value='ekspres'/>
                        Ekspres do kawy
                    </label>
                    <label>
                        <input checked={machine === "inne"} onChange={machineOnChange} name='machine' type='radio'
                               value='inne'/>
                        Inny
                    </label>
                    {machine === 'inne' &&
                    <input value={otherMachine} onChange={otherMachineOnChange} type="text" id="text"/>}
                    <button className='next-btn' type="submit">Dalej</button>
                 </fieldset>
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