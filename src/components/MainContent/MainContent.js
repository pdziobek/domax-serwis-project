import React from 'react';
import './style.scss';



export default function MainContent({children}) {
    return (
        <div className='main-content'>
            {children}
        </div>
    );
}
