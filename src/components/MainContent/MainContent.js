import React from 'react';
import './style.scss';



export default function MainContent({children}) {
    return (
        <div className='main-container'>
            <div className='main-content'>
                {children}
            </div>
            <div className='main-machines'></div>
        </div>

    );
}
