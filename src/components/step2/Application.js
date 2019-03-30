import React from "react";
import './_application.scss';
import Form from '../standalone/Form';
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
      date: moment(),
    };
  }
  handleDate(e){
    this.setState({
      date:e
    })
    console.log(this.state.date)
  }

  onFormChange = (e) => {
    this.refs.form.handleChange(e);
  }
  componentDidMount(){

  }

  render() {
    const { date } = this.state;
    return (
      <div className="formStep">
        <div className="formulaire">
          <h1>Formulaire de contact</h1>
          <Form ref='form' query='/formulaire'>
            <input type="text" name="name" id="name" placeholder="Nom" onChange={e => this.onFormChange(e)}/>
            <input type="text" name="firstName" id="firstName" placeholder="Prénom" onChange={e => this.onFormChange(e)}/>
            <input type="tel" name="phone" id="phone"
              pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
              placeholder="Téléphone"
            onChange={e => this.onFormChange(e)}/>

            <label>
              <h4>Quels sont les 3 dernières moyennes de l&apos;élève en maths? (Exemple: 13, 8, 6)</h4>
              <input placeholder='12' type="number" name="note1" id="note1" onChange={e => this.onFormChange(e)}/>
              <input placeholder='15' type="number" name="note2" id="note2" onChange={e => this.onFormChange(e)}/>
              <input placeholder='17' type="number" name="note3" id="note3" onChange={e => this.onFormChange(e)}/>
            </label>

            <label>
              <h4>Comment l&apos;aider vous dans ses études ? </h4>
              <textarea type="text" name="description" id="description"
                placeholder="Facultatif"
                cols="60"
                rows="10"
              onChange={e => this.onFormChange(e)}/>
            </label>
            <label>
              <h4>Quand pouvons nous en discuter ?</h4>
              <DatePicker
                selected={date}
                onChange={(e => { this.handleDate(e) })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
                id="date"
              >
              </DatePicker>
            </label>
            <input type="submit" id="submit" value="Validez pour 1h gratuite" onChange={e => this.onFormChange(e)}/>
          </Form>
        </div>
      </div>
    );
  }
}

export default Application;
