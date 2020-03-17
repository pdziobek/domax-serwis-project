import React from 'react';
import RequestFormMachine from '../../components/RequestForm/RequestFormMachine'
import {Switch, Route} from 'react-router-dom';

const RequestForm = () => {

    return (<div>
        <Switch>
            <Route path="*">
                <RequestFormMachine/>
            </Route>
        </Switch>
    </div>)

};

export default RequestForm