import React from 'react';
import '../Home/style.scss';
import './style.scss';
import {Link} from "react-router-dom";


export default function AboutUs() {
    return (
        <section>
            <h1 className='heading'> O NAS </h1>

            <div className='about-us'>
                <p className='about-us-txt1'>Autoryzowany serwis sprzętu AGD</p>
                <p className='about-us-txt2'>W DOMAX-SERWIS traktujemy Twój sprzęt jakby był Nasz własny, co oznacza, <br/>że dołożymy wszelkich starań aby go naprawić.
                    <br/>Skorzystaj z formularza zamówienia naprawy. Opisz króŧko swój problem a my skontaktujemy się tak szybko, jak to możliwe.
                </p>
                <button className='btn'><Link className='btn-text' to="/repairvisit/1">UMÓW SIĘ NA NAPRAWĘ</Link></button>

            </div>

        </section>
    );
}