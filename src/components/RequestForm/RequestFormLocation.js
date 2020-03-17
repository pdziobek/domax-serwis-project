import React from "react";

const RequestFormLocation = () => {

    return (
        <div>
            <form>
                <label htmlFor="select location">Wybierz miejsce naprawy</label>

                <button>Nowy Targ</button>
                <button>Zakopane</button>
                <button>Okolice</button>
                <label htmlFor="another">inne:</label>
                <input type="text" id="text"/>
            </form>
        </div>
    )

};

export default RequestFormLocation;