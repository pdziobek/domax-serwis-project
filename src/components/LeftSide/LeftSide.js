import React from 'react';
import image1 from '../../images/obrazek1.jpeg';

import logoipsum from '../../images/logoipsum.jpg'
import './style.scss';




export default function LeftSide() {
    return (
        <div className="left-side">
            <img className="logo" src={logoipsum} alt='logo'/>
            <img src={image1} alt='image1'/>

        </div>
    );
}
