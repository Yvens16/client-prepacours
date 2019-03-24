import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import './main.css';

import Home from './components/landing/Home';
import NavBar from './components/navigation/NavBar';
import Description from './components/sales/Description'
import NotFound from './components/notFound/NotFound';
import Thanks from './components/thanks/Thanks';
import Footer from './components/footer/Footer';
import Application from './components/step2/Application';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwe someIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Backdrop from './components/backdrop/Backdrop';

library.add(faStroopwafel)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
    <div className="App" style={{height: '100%'}}>
      <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
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
