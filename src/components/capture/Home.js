import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="hero">
        <span className="hero__logo"> Prépa-Cours </span>

        <div className="hero__catch">
          "Offrez une éducation de qualité à vos enfants, <br/>
          seulement pour les plus motivés."
          <br />
          <span className="hero__catch-span">
            (Et sans devoir vous ruiner!)
          </span>
        </div>
      </div>

      
      <div className="limit">
        <h2>Dû aux grand nombre de demande que nous reçevons il reste très peu de places...</h2>
      </div>
      
      <div className="promise">
        <div className="promise__note">
          <img src="/assets/grades.svg" alt="" className="promise__note-logo" />
          <h3>+3 point en moyenne par matière</h3>
          <p>
            Les élèves dont j'ai eu la chance ont pu augmenter leur moyenne de 3
            points et plus car ils étaient sérieux et motivé! Je n'ai fais que
            leur donné les bonnes méthodes.
          </p>
        </div>
        <div className="promise__discipline">
          <img
            src="assets/calendar.svg"
            alt=""
            className="promise__note-logo"
          />
          <h3>La discipline</h3>
          <p>
            Nous enseignons aux élèves des techniques de travail et leur
            apprenons la discipline ce qui leur servira tout au long de leur
            vie.
          </p>
        </div>
        <div className="promise__groupe">
          <img src="/assets/group.svg" alt="" className="promise__note-logo" />
          <h3>Des cours en groupe</h3>
          <p>
            Les cours en groupe sont plus efficace. Car l'élève peut échanger,
            donner des explications et en recevoir de la part de ses camarades.
            Ce qui peut améliorer grandement sa compréhension.
          </p>
        </div>
        <div className="promise__message">
          <img
            src="/assets/message.svg"
            alt=""
            className="promise__note-logo"
          />
          <h3>Présent 24/24h</h3>
          <p>
            Nous avons créer un groupe whatssap ou les élèves pourront s'entraider. Et
            sur lequel les tuteurs pourront répondre aux questions à n'importe
            quel moment. <br /> Et cela gratuitement.
          </p>
        </div>
      </div>
      <div className="satisfait">
        Satisfait ou remboursé <span>sans délai</span> <br/>
        <Link to="/description" className="split__right-cta">En savoir plus</Link>
  </div>
    </main>
  );
};

export default Home;
