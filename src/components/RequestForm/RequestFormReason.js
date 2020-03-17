import React from "react";

const RequestFormReason = () => {

    return (
        <div>
            <form>
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
                    <label htmlFor="other issue">Inne:</label><br/>
                        <textarea value="issue5" placeholder="Opisz krótko problem ze sprzętem"/>

                </div>
            </form>
        </div>

)

};



export {RequestFormReason}