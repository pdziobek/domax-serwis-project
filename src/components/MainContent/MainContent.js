import React from 'react';
import './style.scss';
import MainMachines from "./MainMachines";



export default function MainContent({children}) {
    return (
        <div className='main-container'>
            <div className='main-content'>
                {children}
            </div>
            <MainMachines/>

        </div>

    );
}
