import React from 'react';
import Button from '../../components/button';
import './style.scss';
import Navbar from "../../components/Navbar/Navbar";
import MainContent from "../../components/MainContent/MainContent";
import {Link} from "react-router-dom";

export default function Home() {
  return (

          <section>
              <h1 className='heading'> Autoryzowany serwis AGD od 15 lat na podhalu </h1>
              <p className='main-text'>
                  Dobrze wiemy na czym bazują producenci naszych sprzętów - chcą żebyśmy kupowali nowy, jak najczęściej.
                  Najbardziej oczywistym sposobem postarzenia produktu jest używanie komponentów,
                  które powodują szybkie uszkodzenie sprzętu lub stosowanie słabej jakości materiałów.
              </p >
              <p className='main-text'>
                  Nie wydawaj pieniędzy w błoto, co dwa lata na nową pralkę/lodówkę/ zmywarkę.
              </p>
              <p className='main-text'>
                  Naprawimy je dla Ciebie!
              </p>


              <button className='btn'><Link className='btn-text' to="/repairvisit/1">UMÓW SIĘ NA NAPRAWĘ</Link></button>
          </section>
  );
}
