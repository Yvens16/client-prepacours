import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/landing/Home';
import Description from './components/sales/Description'
import NotFound from './components/notFound/NotFound';
// import './main.css';
import Footer from './components/footer/Footer';
import Application from './components/step2/Application';

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
        <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/description" component={Description} />
    <Route  path="/application" component={Application} />

    {/*404 route Always Last */}
      <Route component={NotFound} />
      </Switch>
      {/*
        <Footer/> 
       */}
      </div>
    );
  }
}

export default App;
