import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <main className="description">
    <div className="profs">
    <h1>Nos professeurs sont de qualité</h1>
    {/* <img src="assets/photo-moi.png" alt="" className=""/>*/} 
    </div>
      <div className="split">
        <div className="split__left">
          <img
            src="/assets/photo-moi.png"
            alt="img"
            className="split__left-img"
          />
          <p>Yvens Belaston, dévelopeur web.</p>
        </div>
        <div className="split__right">
          <h2>Ce n''était pas normal...</h2>
          <div className="split__right-story">
            <p>
              Pendant mes années d'études en fac de Finance, je donnais des
              cours particuliers à des prix assez élevés. J'ai pu remarquer que
              les élèves abandonnaient très vite leur motivation face à des
              difficultés rencontrer dans certaines matières. Se croyant mauvais
              ou n'être pas fait pour celles-ci. Le problème, c'est qu''ils
              manquaient énormément de cadre et de discipline. Ce qui les
              empêche grandement de réussir la ou ils ont le plus de
              difficultées. La vérité est que par la pratique vient la maîtrise.
              Et avec la maîtrise vient la connaissance.
            </p>
          </div>
          <Link to="/" className="split__right-cta">
            En savoir plus
            </Link>
            <a  href="/" className="hello">Hello how are you</a>
            <span className="hello__by">Show me</span>
            </div>
      </div>
    </main>
  );
};

export default Description;
