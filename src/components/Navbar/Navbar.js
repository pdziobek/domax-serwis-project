import React from 'react';
import {Link} from "react-router-dom";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Prices from "../../pages/Prices/Prices";
import RepairVisit from "../../pages/RepairVisit/RepairVisit";
import './style.scss';
import logo from '../../images/logowhite.png';


export default function Navbar() {
    return (
        <header className='top-bar'>
            <img src={logo} className='logo'/>
            <nav>
                <ul className='nav-list'>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/aboutus">o nas</Link></li>
                    <li><Link to="/prices" >cennik</Link></li>
                    <li><Link to="/repairvisit/1">umów naprawę</Link></li>
                </ul>
            </nav>
        </header>
    );
}
