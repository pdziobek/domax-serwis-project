import React from 'react';


import logo from '../../images/logo_top.png'
import './style.scss';




export default function LeftSide() {
    return (
        <div className="left-side">
            <img className="logo" src={logo} alt='logo'/>

        </div>
    );
}
