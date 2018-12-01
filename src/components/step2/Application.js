import React from "react";
import './_application.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import 'moment/locale/fr';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
      help:"",
      diff:"",
      date:moment(),

      days:"",
      hours:"",
      minutes:"",
      seconds:""
    };
  }

  countDown(){
    let endDate, x, now, beforeEnd, d, h, m, s;
    endDate = new Date('Jan 5, 2019 00:00:00').getTime();

    x = setInterval(() => {
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
    console.log(this.state)
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
        Il reste {this.state.days} jours, {hours} heures, {minutes} minutes, et {seconds} secondes
         avant la fin de la réduction.
        </div>
        <div className="application__right">
          <form 
          className="application__right-form" 
          action=""
          onSubmit={(e => {this.handleSubmit(e)})}
          >
            <label>
              Nom:
              <input 
              type="text" 
              name="name" 
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
                id=""
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
            >
            </DatePicker>
            </label>
            <input type="submit" value="Validez pour 2h gratuite" />
          </form>
         
        </div>  
        </div>      
      </main>
    );
  }
}

export default Application;
