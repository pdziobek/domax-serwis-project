import React, {useEffect} from 'react';
import RequestForm from '../../components/RequestForm/RequestForm'
import {createPortal} from 'react-dom';
import {useParams} from "react-router-dom";


const modalRoot = document.getElementById('modal-root');


export default function Modal() {
    const div  = document.createElement('div');
    const { step } = useParams();


    useEffect(()=>{
        modalRoot.appendChild(div);

        return () => modalRoot.removeChild( div );
    },[step])


    return createPortal(
            <RequestForm/>,
            div
    )
}