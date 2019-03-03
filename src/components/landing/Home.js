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
import slack from '../icons/slack.svg';
import children from '../icons/children.svg';

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
            <Form ref='child' query='/form'>
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

        <div className="collab">
          <div className="collab__logo">
            <div className="collab__logo-logo">
            <img
            src={slack}
            style={{ height: "100px", width: "100px" }}
            alt=""
          />
            </div>
            <div className="collab__logo-text">Rejoignez Notre groupe Slack</div>
          </div>
          <div className="collab__text">
            <ul>
              <li>- Les élèves peuvent s’entraider et pourquoi pas y trouver un groupe de révisions. </li>
              <br/>
              <li>- Nos professeurs sont également présent pour fournir une aide 24h/24 gratuitement. Si il est bloqué sur un devoir, un exposé, parfois l’on a besoin juste d’un petit coup de pouce peut sauver une soirée.</li>
            </ul>
          </div>
        </div>

        <div className="faq">
          <h1>Questions fréquentes</h1>
          <ul>
            <li>
              <h2>Où se passent exactement les cours ?</h2>
              <p>Les cours se déroulent chez nos professeurs, chez un élève, dans les locaux de nos partenaires. (Mairie, centre aéré etc...)</p>
            </li>
            <li>
              <h2>Ils y a t&apos;ils des cours pendant les vacances scolaires ?</h2>
              <p>Si le professeur et les élèves le souhaitent, c&apos;est tout à fais possible.
              N&apos;hésitez pas à en discuter quelques jours avant les vacances.
              Nous organisons aussi des stages de perfectionnement pour ceux qui le souhaitent.</p>
            </li>
            <li>
              <h2>Les groupes sont t&apos;ils homogène ?</h2>
              <p>Oui, le maximum est fait pour regrouper les élèves de la même tranche d&apos;âge et favoriser de bons résultats.</p>
            </li>
            <li>
              <h2>Que faire si je dois manquer un cours ?</h2>
              <p>Assurer vous de prévenir le professeurs au moins deux jours à l&apos;avance. et bien sûr, vous ne serez pas facturer.</p>
            </li>
            <li>
              <h2>Est t&apos;il possible de faire un cours de groupe à mon domicile ?</h2>
              <p>Oui bien sûr, il suffit que le professeur et les autres élèves donnent leur accord. Nous nous chargerons de faire les demandes.</p>
            </li>
          </ul>
        </div>

        <div className="children">
        <img
        src={children}
        style={{ height: "auto", width: "100%" }}
        alt=""
      />
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