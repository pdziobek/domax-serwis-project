import React from 'react';
import RequestFormMachine from '../../components/RequestForm/RequestFormMachine'
import Location from '../../components/RequestForm/RequestFormLocation'
import Reason from '../../components/RequestForm/RequestFormReason'
import Details from '../../components/RequestForm/RequestFormVisitDetails'
import Finalization from '../../components/RequestForm/RequestFormFinalization'
import './style.scss';


import {Switch, Route, useParams} from 'react-router-dom';


const forms = [  <RequestFormMachine/>, <Location/>, <Reason/>, <Details/>, <Finalization/>];

const optimizeStep = (step) => Math.max( 0,  Math.min( step, forms.length - 1 ));

const RequestForm = () => {
    const { step } = useParams();

    return (<div className='portal'>
        <div className='modal'>
            {forms[optimizeStep(step - 1)]}
        </div>
    </div>)

};

export default RequestForm