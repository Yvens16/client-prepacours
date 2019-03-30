import React from "react";
import { Link } from "react-router-dom";
import Form from '../standalone/Form';
import "./_home.scss";
import navigation from "../icons/navigation.svg";
import running from "../icons/running.svg";
import presentation from "../icons/presentation.svg";
import success from "../icons/success.svg";
import goal from "../icons/goal.svg";
import euro from "../icons/euro.svg";
import slack from '../icons/slack.svg';
import children from '../icons/children.svg';
import hero from '../icons/hero__svg.svg';

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
            <h1>Cours de maths intensifs en petits groupes. 25€/h</h1>
            <h3>
             {/*} Nos cours sont créer pour les élèves déterminés à{" "}
              <span id="line-through">remonter la pente</span> atteindre
    l&apos;éxellence. */}
            Laissez vous tenter par l&apos;exellence.
            Un cours de soutien ne même pas à la réussite.
            Seul une préparation intensive et un état d&apos;ésprit à toute épreuve le peut.
            </h3>
            <button>
            <Link className='a' to='/application'>Réserver un cours</Link></button>
          </div>
          <div className="hero__svg">
          <img
          src={hero}
          alt="Svg of people reading books"
        />
          </div>
        </div>
  
        <div className="value">
          <div className="value__title">
            <h1>Vos avantages</h1>
          </div>
          <div className="value__cols">
            <div className="value__cols-in">
              <img
                src={presentation}
                style={{ height: "100px", width: "100px" }}
                alt="Pégagogie"
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
                alt="Session d'orientation"
              />
              <h2>Sessions d&apos;orientation</h2>
              <p>Accès à des évenement d&apos;orientation en privilégiér.</p>
            </div>
            <div className="value__cols-in">
              <img
                src={euro}
                style={{ height: "100px", width: "100px" }}
                alt="Prix"
              />
              <h2>Prix</h2>
              <p>15€/h soit 3 fois moins chère qu&apos;un cours classique</p>
            </div>
            <div className="value__cols-in">
              <img
                src={running}
                style={{ height: "100px", width: "100px" }}
                alt="Pas d'engagement"
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

        <div className="reservation">
          <h1>Une envie de meilleurs résultats ?</h1>
          <div className="reservation__btn">
            <Form ref='child' query='/form'>
              <input type="text" name="name" id="name" placeholder='Nom'
                onChange={e => this.onChildChange(e)}
              />
              <input type="text" name="firstName" id="firstName" placeholder='Prénom' 
              onChange={e => this.onChildChange(e)}/>
              <input type="tel" name="phone" id="phone" placeholder='06 27 25 48 95' 
              onChange={e => this.onChildChange(e)}/>
              <br/>
                <div id='center'>
                  <input type="submit"  value="Cliquez pour réserver un cours"/>
                </div>
            </Form>
          </div>
        </div>

        <div className="collab">
          <div className="collab__logo">
          <div className="collab__logo-text">
          <h1>
          Rejoignez Notre groupe Slack
          </h1>
          </div>
            <div className="collab__logo-logo">
            <a target="_blank"
            rel="noopener noreferrer" 
            href="https://join.slack.com/t/prepacours/shared_invite/enQtNTcxNjg1NzY4NzIxLTQzNGE4MzEzNWM3ZjZjMTdkZDM3NGFiZDYwYzUxOTlhN2RkYWZhNWQ0MmVlYmNmNWNhM2I5NTM0ZDliZWNkZDg">
            <img
            src={slack}
            alt=""
                />
            </a>
            </div>
          </div>
          <div className="collab__text">
            <ul>
              <li>Les élèves peuvent s’entraider et pourquoi pas y trouver un groupe de révisions. </li>
              <br/>
              <li> Nos professeurs sont également présent pour fournir une aide 24h/24 gratuitement. Si il est bloqué sur un devoir, un exposé, parfois l’on a besoin juste d’un petit coup de pouce peut sauver une soirée.</li>
            </ul>
          </div>
        </div>

        <div className="faq">
          <h1>Questions fréquentes</h1>
          <ul>
            <li>
              <h3>Où se passent exactement les cours ?</h3>
              <p>Les cours se déroulent chez nos professeurs, chez un élève, dans les locaux de nos partenaires. (Mairie, centre aéré etc...)</p>
            </li>
            <li>
              <h3>Ils y a t&apos;ils des cours pendant les vacances scolaires ?</h3>
              <p>Si le professeur et les élèves le souhaitent, c&apos;est tout à fais possible.
              N&apos;hésitez pas à en discuter quelques jours avant les vacances.
              Nous organisons aussi des stages de perfectionnement pour ceux qui le souhaitent.</p>
            </li>
            <li>
              <h3>Les groupes sont t&apos;ils homogène ?</h3>
              <p>Oui, le maximum est fait pour regrouper les élèves de la même tranche d&apos;âge et favoriser de bons résultats.</p>
            </li>
            <li>
              <h3>Que faire si je dois manquer un cours ?</h3>
              <p>Assurer vous de prévenir le professeurs au moins deux jours à l&apos;avance. et bien sûr, vous ne serez pas facturer.</p>
            </li>
            <li>
              <h3>Est t&apos;il possible de faire un cours de groupe à mon domicile ?</h3>
              <p>Oui bien sûr, il suffit que le professeur et les autres élèves donnent leur accord. Nous nous chargerons de faire les demandes.</p>
            </li>
          </ul>
        </div>

        <div className="children">
        <img
        src={children}
        alt=""
      />
        </div>
      </main>
    );
  }
};