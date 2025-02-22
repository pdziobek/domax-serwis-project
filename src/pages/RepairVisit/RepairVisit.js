import React, {useEffect, useState} from 'react';
import RequestForm from '../../components/RequestForm/RequestForm'
import {createPortal} from 'react-dom';
import {useParams} from "react-router-dom";


const modalRoot = document.getElementById('modal-root');


export default function Modal() {
    const div  = document.createElement('div');
    const { step } = useParams();

    const [order, setOrder] = useState({machine:'', location:'', reason:'', inputName:'', inputAddress:'', inputNumber:'', meetingTime:''});

    useEffect(()=>{
        modalRoot.appendChild(div);

        return () => modalRoot.removeChild( div );
    },[step])


    return createPortal(
            <RequestForm setOrder={setOrder} order={order} />,
            div
    )
}