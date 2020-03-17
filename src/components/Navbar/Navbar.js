import React from 'react';
import {Link} from "react-router-dom";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs/AboutUs";
import OurWork from "../../pages/OurWork/OurWork";
import Prices from "../../pages/Prices/Prices";
import RepairVisit from "../../pages/RepairVisit/RepairVisit";


export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/aboutus">o nas</Link></li>
                    <li><Link to="/ourwork">nasze realizacje</Link></li>
                    <li><Link to="/prices" >cennik</Link></li>
                    <li><Link to="/repairvisit">umów naprawę</Link></li>
                </ul>
            </nav>
        </header>
    );
}
