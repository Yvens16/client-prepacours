import React from "react";
import './_application.scss';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import 'moment/locale/fr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '../../api';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
      help:"",
      diff:"",
      date:moment(),

      days:"?",
      hours:"?",
      minutes:"?",
      seconds:"?"
    };
  }

  countDown(){
    let endDate, now, beforeEnd, d, h, m, s;
    endDate = new Date('Jan 5, 2019 00:00:00').getTime();

    setInterval(() => {
      now = new Date().getTime();
      beforeEnd = endDate - now;

      d = Math.floor(beforeEnd/(1000 * 60 * 60 * 24));

      h = Math.floor((beforeEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      m = Math.floor((beforeEnd % (1000 * 60 * 60)) / (1000 * 60));

      s = Math.floor((beforeEnd % (1000 * 60)) / 1000);

      this.setState({
            days : d,
            hours: h,
            minutes : m,
            seconds:  s,
      })

    }, 1000)
  }

  componentDidMount(){
    this.countDown();
  }

  handleDate(e){
    this.setState({
      date:e
    })
    console.log(this.state.date)
  }

  handleChange(event){
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();

    api.post('/form', this.state, {
      onUploadProgress: pe => {
        // console.log('Upload Progress', Math.round(pe.loaded / pe.total * 100) + '%')
      }
    })
    .then(res => {
      console.log('res', res);
      if(res.data.msg === 'sucess'){
        alert("Message sent");
        this.resetForm();
      } else if (res.data.msg === 'fail') {
        alert('Message failed to send.')
      }
    })
    .catch(err =>{
      console.log('Sorry there was an error ', err)
    })

  }

  resetForm(){
    document.getElementById('form').reset();
  }

  render() {
    const {name, phone, diff, help, date, days, hours, minutes, seconds}= this.state;
    return (
      <main>
        <h1>
          Vous y êtes presque, vous avez juste à remplir ce petit formulaire
        </h1>

        <div className="application">
        <div className="application__left"> 
        <div className="application__left-countdown">
        <h2>
        Il reste {days} jours, {hours} heures, {minutes} minutes, et {seconds} secondes
        avant la fin de la réduction.
        </h2>
        </div>
        <div className="guarantee">
      <div className="guarantee__title">
      <h2>Pas d asterix dans le contrat <span id="italic">On a rien à caché</span></h2>
      </div>
      <div className="guarantee__body">
      <p>Mettez nous à l’épreuve! Si vous ne voyez pas de résultats pendant les deux premiers mois. Nous vous remboursons dans la journée. Sans paperasse. Sans problème.</p>
      </div>
      </div>

      <div className="whatsapp">
      <h4>N hésitez pas à rejoindre notre groupe gratuit </h4>
      <a href="https://chat.whatsapp.com/HtKHTVKbODu1uUOtPSAaQk" target="blank">
      <img src="/assets/whatsapp.svg" alt=""/>
      </a>
      <p>Vos enfants pourront y recevoir de l aide pour leur devoirs 7/7 <FontAwesomeIcon icon="stroopwafel" /> </p>
      </div>

      <div className="reason">
     <p>
      Faisant partie de ceux qui ne pouvait pas prendre de cours particuliers 
      j’ai décidé de rendre accessible ceux à quoi je n’avais pas accès. 
      Mon objectif pour fin 2019 est d’avoir pu aider au moins 50 élèves puis 100 l’année 
      d’après et pourquoi pas 1000 élèves dans les «  prochaines années. 
     </p>

     <span>Ce système nous permet de réduire les coûts pour vous ainsi que d'augmenter le salaire à l'heure de nos professeurs.</span>
      </div>
        </div>


        <div className="application__right">
          <form 
          id="form"
          className="application__right-form" 
          action="/form"
          method="POST"
          onSubmit={(e => {this.handleSubmit(e)})}
          >
            <label>
              Nom:
              <input 
              type="text" 
              name="name" 
              id="name"
              value={name}
              placeholder="Jean Dujardin" 
              onChange={(e => {this.handleChange(e)})}
                />
            </label>
            <label>
              Téléphone:
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phone}
                pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                placeholder="06 23 73 98 37"
                onChange={(e => {this.handleChange(e)})}
              />
            </label>
            <label>
              Dans quelle matière l'élève à t'il des difficultées?
              <input type="text" 
              name="diff" 
              id="diff"
              value={diff} 
              placeholder="Dites nous tous..." 
              onChange={(e => {this.handleChange(e)})}
              />
            </label>
            <label>
              Comment l''aider vous dans ses études?
              <input
                type="text"
                name="help"
                value={help}
                id="help"
                placeholder="Dites nous tous..."
                onChange={(e => {this.handleChange(e)})}
              />
            </label>
            <label>
            <h1>Pour être rappeler après le travail</h1>
            <p>   Entre 18h30 et 21h du lundi au vendredi
            Entre 9h et 17h le weenkend</p>
            <DatePicker
            selected={date}
            onChange={(e => {this.handleDate(e)})}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
            id="date"
            >
            </DatePicker>
            </label>
            <input type="submit" value="Validez pour 2h gratuite" />
          </form>
         
        </div>  
        </div>   
        <div className="direction">
        <Link to='/'>Home</Link>
        <Link to='/description'>Description</Link>
        <Link to='/thanks'>Thanks</Link>
      </div>   
      </main>
    );
  }
}

export default Application;
