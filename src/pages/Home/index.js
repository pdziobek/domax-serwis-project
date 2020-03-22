import React from 'react';
import Button from '../../components/button';
import './style.scss';
import Navbar from "../../components/Navbar/Navbar";
import MainContent from "../../components/MainContent/MainContent";
import {Link} from "react-router-dom";
import mainImage from '../../images/backgroung800.jpg';

export default function Home() {
  return (
        <div>
          <section className='main-text'>
              <h1 className='heading'> TWÓJ SERWIS SPRZĘTU AGD</h1>
              <p className='slogan'>
                  Naprawiamy Tak<br/> Jak We Własnym Domu.
              </p >
              <p className='introduction'>
                  Od 2005 roku, najlepszy serwis urządzeń domowych, najdłużej działający na Podhalu.
              </p>
              <img src={mainImage} className='main-image'/>
          </section>



              {/*<button className='btn'><Link className='btn-text' to="/repairvisit/1">UMÓW SIĘ NA NAPRAWĘ</Link></button>*/}



        </div>
  );
}
