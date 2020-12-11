import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Reg from './components/Reg';
import {BrowserRouter, Switch, Route} from "react-router-dom";



ReactDOM.render(
  
  <BrowserRouter>
    <Switch>

      <Route exact path='/' component={App}/>
      <Route exact path='/Registration' component={Reg}/>

    </Switch>
  </BrowserRouter>,


  document.getElementById('root')
);