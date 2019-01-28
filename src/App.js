import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import './main.css';

import Home from './components/landing/Home';
import NavBar from './components/navigation/NavBar';
import Description from './components/sales/Description'
import NotFound from './components/notFound/NotFound';
import Thanks from './components/thanks/Thanks';
import Footer from './components/footer/Footer';
import Application from './components/step2/Application';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div className="App">
      <NavBar/>
        <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/description" component={Description} />
    <Route  path="/application" component={Application} />
    <Route  path="/thanks" component={Thanks} />

    {/*404 route Always Last */}
      <Route component={NotFound} />
      </Switch>
        <Footer/> 
      </div>
    );
  }
}

export default App;
