import React from "react";
import { Link } from "react-router-dom";
import './_home.scss';

const Home = () => {
  return (
    <main className="home"> 
    <span className="logo"> Prépa-Cours </span>   
    <div className="hero">
    <div className="hero__title">
      <h1>Augmenter sa moyenne en maths d’au moins 3 point et plus.</h1>
      <h1>Améliorer son sérieux et sa rigueur au travail.</h1>
      </div>
      </div>

      <div className="value">
      <div className="value__title">
      <h2>La rigueur et le travail sont les critères les plus importants pour réussir ses études.</h2>
      </div>
      <div className="value__stacking">
        <ul>
        <li>Un pack de 3 cours  particuliers/semaine  15€/heure.</li>
        <li>Test de niveau et mise en place d’un objectif sur la moyenne. Gratuit</li>
        <li>Apprentissage des techniques de travail et de rigueur .  Gratuit. </li>
        <li>Evénement d’orientation et rdv avec un pro dans le domaine visée par l’élève. Gratuit</li>
        <li>Groupe d’échange pour une aide permanente.24h/24. Gratuit.</li>
        </ul>
      </div>
      </div>

      <div className="guarantee">
      <div className="guarantee__title">
      <h2>Pas d asterix dans le contrat <span id="italic">On a rien à caché</span></h2>
      </div>
      <div className="guarantee__body">
      <p>Mettez nous à l’épreuve! Si vous ne voyez pas de résultats pendant les deux premiers mois. Nous vous remboursons dans la journée. Sans paperasse. Sans problème.</p>
      </div>
      </div>

      <div className="direction">
      <Link to='/application'>En savoir plus</Link>
      </div>
    </main>
  );
};

export default Home;
