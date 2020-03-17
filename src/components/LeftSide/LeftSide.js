import React from 'react';
import image1 from '../../images/obrazek1.jpg';
import image2 from '../../images/obrazek2.jpg';
import image3 from '../../images/obrazek3.jpg';
import logoipsum from '../../images/logoipsum.jpg'
import './style.scss';




export default function LeftSide() {
    return (
        <div className="left-side">
            <img className="logo" src={logoipsum} alt='logo'/>
            <img src={image1} alt='image1'/>
            <img src={image2} alt='image1'/>
            <img src={image3} alt='image1'/>

        </div>
    );
}
