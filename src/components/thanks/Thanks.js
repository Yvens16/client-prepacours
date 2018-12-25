import React from 'react';
import { Link } from "react-router-dom";
import './_thanks.scss';

const Thanks = () => {
  return (
    <main className="t">
    <div className="thanks">
    <h1>Merci vous faites parti du peu de gens qui sont prêt à 
    faire ce qu il faut pour changer les choses. BRAVO!</h1>
    </div>

    <div className="upsell">
    <div className="upsell__stage">
     <h3>Quoi de mieux pour commencer l’année 2019 qu’un bon stage
      de remise à niveau en maths? </h3>
      </div> 
    <div className="upsell__plan">
    <h2>Payment plan</h2>
    <p>
    Plus préparation au Brevet des collèges. <br/>
     Collège: stage en maths 120€ la semaine et 240€ les 2 semaines
    Paiement en plusieurs fois pour les stages intensifs.
    Paiement en 2x ou 3x.</p>
    </div>
    <div className="direction">
      <Link to='/'>Home</Link>
      <Link to='/application'>En savoir plus</Link>
      <Link to='/description'>Description</Link>
    </div>
    </div>
    </main>
  )
};

export default Thanks;