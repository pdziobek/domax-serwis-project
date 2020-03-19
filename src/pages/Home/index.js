import React from 'react';
import Button from '../../components/button';
import './style.scss';
import Navbar from "../../components/Navbar/Navbar";
import RightSide from "../../components/RightSide/RightSide";
import {Link} from "react-router-dom";

export default function Home() {
  return (

          <section>
              <h1> Autoryzowany serwis AGD od 15 lat na podhalu </h1>
              <p>
                  Dobrze wiemy na czym bazują producenci naszych sprzętów - chcą żebyśmy kupowali nowy, jak najczęściej.
                  Najbardziej oczywistym sposobem postarzenia produktu jest używanie komponentów,
                  które powodują szybkie uszkodzenie sprzętu lub stosowanie słabej jakości materiałów.
              </p>
              <p>
                  Nie wydawaj pieniędzy w błoto, co dwa lata na nową pralkę/lodówkę/ zmywarkę.
              </p>
              <p>
                  Naprawimy je dla Ciebie!
              </p>


              <button><Link to="/repairvisit/1">UMÓW SIĘ NA NAPRAWĘ</Link></button>
          </section>
  );
}
