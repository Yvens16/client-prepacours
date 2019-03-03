import React from 'react';
import Form from './components/standalone/Form';
import Clock from './components/standalone/Clock';


export default class Test extends React.Component {
  constructor (props) {
    super (props);
    this.state = ({
      name: '',
      days:'',
    })
    this.getDateFromClock = () => {
      setInterval(() => {
        this.setState({
              days :this.refs.clock.state.days,
              hours: this.refs.clock.state.hours,
              minutes : this.refs.clock.state.minutes,
              seconds:  this.refs.clock.state.seconds,
        })
    
      }, 1000)
    }
  }

  onChildChange = (e) => {
    this.refs.child.handleChange(e);
    // this.setState({
    //   name: e.value,
    // })
  }

  componentDidMount() {
    this.getDateFromClock();
    // console.log('this.refs.child', this.refs.child)
    console.log(this.refs.clock, 'refs of clock')
    console.log(this.refs.clock.state, 'state');
  }
  render () {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <>
        <h1>Test Form Components with children</h1>
        <Form ref="child">
          <label>
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Yvens"
              onChange={e => this.onChildChange(e)}
            />
          </label>
          <input type="submit" value="Validez pour 1h gratuite" />
        </Form>
        <div>
          <Clock ref='clock' end='june 1, 2019 00:00:00'>
            Il reste {days} jours, {hours} heures, {minutes} minutes et {seconds} seconds
          </Clock>
        </div>
      </>
    )
  }
}