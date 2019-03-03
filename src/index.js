import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import App from './App';
// import Test from './Test';
// import Form from '../src/components/standalone/form/Form';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <BrowserRouter>
   <App />
   {/*<Test/>*/}
  </BrowserRouter>,
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
