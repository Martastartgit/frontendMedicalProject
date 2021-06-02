import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import {Confirmation} from "./helper-components/EmailConfirmer/EmailConfirmer";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {Logout} from "./components/Logout/Logout";
import {Register} from "./components/Register/Register";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={ Header }/>
              <Route path='/login' component={ Login }/>
              <Route path='/logout' component={ Logout }/>
              <Route path='/register' component={ Register }/>
              <Route path='/confirm/:token' component={ Confirmation }/>
          </Switch>

      </BrowserRouter>

  );
}

export default App;
