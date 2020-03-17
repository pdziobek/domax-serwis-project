import React from 'react';

const RequestFormMachine = () => {

    return (
        <div>
            <form>
                <label htmlFor="select machine">Wybierz rodzaj sprzętu do naprawy</label>

                <button>pralka</button>
                <button>zmywarka</button>
                <button>ekspres do kawy</button>
                <label htmlFor="another">inne:</label>
                <input type="text" id="text"/>
            </form>
        </div>
    )

};


export default RequestFormMachine;
