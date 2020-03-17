import React, {useEffect} from 'react';
import RequestForm from '../../components/RequestForm/RequestForm'
import {createPortal} from 'react-dom';
import './style.scss' ;

const modalRoot = document.getElementById('modal-root');


export default function Modal() {
    const div  = document.createElement('div');

    useEffect(()=>{
        modalRoot.appendChild(div);
    },[])


    return createPortal(
            <RequestForm/>,
            div
    )
}