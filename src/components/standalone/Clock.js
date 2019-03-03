import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
import 'moment/locale/fr';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:moment(),
      days:"?",
      hours:"?",
      minutes:"?",
      seconds:"?"
    }
  }

  countDown(){
    let endDate, now, beforeEnd, d, h, m, s;
    // 'june 5, 2019 00:00:00'
    endDate = new Date(this.props.end).getTime();

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

      render () {
        return (
          <div>
          {this.props.children}
          </div>
        )
      }
}

Clock.propTypes = {
  date : PropTypes.string,
  children: PropTypes.node
}