import React from "react";
import {useHistory} from "react-router-dom";

const RequestFormReason = () => {
    const history = useHistory();
    const validation = (e) => {
        e.preventDefault();
        //zapisz w serverze stan formularza
        //redirwect
        //przekieroqwanie
        history.push("/repairvisit/4");
    };

    return (
        <div>
            <form onSubmit={validation}>
                <label htmlFor="select issue">Wybierz lub opisz objawy:</label>

                <div>

                    <label>
                        <input type="checkbox" name="issue" value="issue1"/>nie włącza się;
                    </label><br/>

                    <label>
                        <input type="checkbox" name="issue" value="issue2"/>hałasuje;
                    </label><br/>

                    <label>
                        <input type="checkbox" name="issue" value="issue3"/>włącza się ale nie reaguje;
                    </label><br/>

                    <label>
                        <input type="checkbox" name="issue" value="issue4"/>wyświetlacz nie włącza się;
                    </label><br/>
                </div>

                <div>
                    <label>
                        Inne:
                        <input name='issue' type='radio' value='inne'/>
                    </label>
                    <input type="text" id="text"/>
                    <button type="submit">Dalej</button>

                </div>
            </form>
        </div>

)

};



export default RequestFormReason