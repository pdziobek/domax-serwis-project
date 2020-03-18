import React, { useState } from 'react';
import RequestFormMachine from '../../components/RequestForm/RequestFormMachine'
import Location from '../../components/RequestForm/RequestFormLocation'
import Reason from '../../components/RequestForm/RequestFormReason'
import Details from '../../components/RequestForm/RequestFormVisitDetails'
import Finalization from '../../components/RequestForm/RequestFormFinalization'
import './style.scss';


import {Switch, Route, useParams, useHistory} from 'react-router-dom';

const forms = [ (props) =>  <RequestFormMachine {...props}/>, (props) => <Location {...props}/>, (props)=> <Reason {...props}/>,(props) => <Details {...props}/>, (props) => <Finalization {...props}/>];

const optimizeStep = (step) => Math.max( 0,  Math.min( step, forms.length - 1 ));

const RequestForm = ({setOrder, order}) => {
    const { step } = useParams();



    const history = useHistory();
    // const validation = (e) => {
    //     e.preventDefault();
    //     //zapisz w serverze stan formularza
    //     //redirwect
    //     //przekieroqwanie
    //     history.push("/repairvisit/2/");
    // };



    return (<div onClick={()=>{history.push("/")}} className='portal'>
        <div onClick={e => e.stopPropagation()} className='modal'>
            {forms[optimizeStep(step - 1)]( { setOrder, order}  )}
        </div>
    </div>)

};

export default RequestForm