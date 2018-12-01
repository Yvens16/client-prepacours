import React from 'react';
import { Link } from "react-router-dom";
import './_thanks.scss';

const Thanks = () => {
  return (
    <main>
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
    <p>Paiement en plusieurs fois pour les stages intensifs.
    Paiement en 2x ou 3x. Le total du plan de paiement doit être supérieur au prix initial pour pousser les gens à payer en une seul fois.
    150€ ou 270€ avec le plan de paiement</p>
    </div>
    </div>
    </main>
  )
};

export default Thanks;