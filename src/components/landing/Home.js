import React from "react";
import { Link } from "react-router-dom";
import Form from '../standalone/form/Form';
import "./_home.scss";
import navigation from "../icons/navigation.svg";
import running from "../icons/running.svg";
import presentation from "../icons/presentation.svg";
import success from "../icons/success.svg";
import goal from "../icons/goal.svg";
import euro from "../icons/euro.svg";

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      firstName: '',
      phone: '',
    })
  }

  onChildChange = (e) => {
    this.refs.child.handleChange(e);
    console.log('state', this.state);
  }
  render() {
    return (
      <main className="home">
        <div className="hero">
          <div className="hero__title">
            <h1>Cours de maths intensifs en petits groupes.</h1>
            <h3>
              Nos cours sont créer pour les élèves déterminés à{" "}
              <span id="line-through">remonter la pente</span> atteindre
              l&apos;éxellence.
            </h3>
          </div>
          <div className="hero__svg">
            <h1>AyyyyaaaaaaMock</h1>
          </div>
        </div>
  
        <div className="value">
          <div className="value__title">
            <button className="value__title-btn">Vos avantages</button>
          </div>
          <div className="value__cols">
            <div className="value__cols-in">
              <img
                src={presentation}
                style={{ height: "100px", width: "100px" }}
                alt=""
              />
              <h2>Pédagogie</h2>
              <p>
                Des petits groupes de 5 élèves maximum. Des professeurs exellent
                dans leur domaines respectifs.
              </p>
            </div>
            <div className="value__cols-in">
              <img
                src={navigation}
                style={{ height: "100px", width: "100px" }}
                alt=""
              />
              <h2>Sessions d&apos;orientation</h2>
              <p>Accès à des évenement d&apos;orientation en privilégiér.</p>
            </div>
            <div className="value__cols-in">
              <img
                src={euro}
                style={{ height: "100px", width: "100px" }}
                alt=""
              />
              <h2>Prix</h2>
              <p>15€/h soit 3 fois moins chère qu&apos;un cours classique</p>
            </div>
            <div className="value__cols-in">
              <img
                src={running}
                style={{ height: "100px", width: "100px" }}
                alt=""
              />
              <h2>Pas d&apos;engagement</h2>
              <p>
                Pas de frais de dossiers. Vous n&apos;êtes facturé qu'à l'heure.
                Vous pouvez vous désinscrire à tous moment.
              </p>
            </div>
            <div className="value__cols-in">
              <img src={goal} style={{ height: "80px", width: "100px" }} alt="" />
              <h2>Prise d&apos;objectifs</h2>
              <p>
                Suivie de l'évolution de l'élève par rapport aux objectifs à la
                fin de chaque mois.
              </p>
            </div>
            <div className="value__cols-in">
              <img
                src={success}
                style={{ height: "100px", width: "100px" }}
                alt=""
              />
              <h2>Préparation intensive</h2>
              <p>
                2h à 4h de cours par weekend, 2h le samedi matin et 2h le dimanche
                matin. Rien ne surpasse les efforts consistant, non même pas le
                talent !
              </p>
            </div>
          </div>
        </div>
  
        {/*<div className="guarantee">
          <div className="guarantee__title">
            <h2>
              Pas d&apos;asterix dans le contrat{" "}
              <span id="italic">On a rien à caché</span>
            </h2>
          </div>
          <div className="guarantee__body">
            <p>
              Mettez nous à l’épreuve! Si vous ne voyez pas de résultats pendant
              les deux premiers mois. Nous vous remboursons dans la journée. Sans
              paperasse. Sans problème.
            </p>
          </div>
          <div
            className="fb-share-button"
            data-href="https://www.facebook.com/fabuno/"
            data-layout="button_count"
            data-size="small"
            data-mobile-iframe="true"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ffabuno%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Partager
            </a>
          </div>
    </div>*/}
  
        <div className="reservation">
          <div className="reservation__btn">
            <Form ref='child'>
              <input type="text" name="name" id="name" placeholder='Nom'
                onChange={e => this.onChildChange(e)}
              />
              <input type="text" name="firstName" id="firstName" placeholder='Prénom' 
              onChange={e => this.onChildChange(e)}/>
              <input type="tel" name="phone" id="phone" placeholder='Numéro de téléphoone' 
              onChange={e => this.onChildChange(e)}/>
              <br/>
                <div id='center'>
                  <input type="submit"  value="Réserver un cours"/>
                </div>
            </Form>
          </div>
        </div>
  
        <div className="direction">
          <Link to="/application">En savoir plus</Link>
          <Link to="/description">Description</Link>
          <Link to="/thanks">Thanks</Link>
        </div>
      </main>
    );
  }
};