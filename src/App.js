import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import MainHeader from "./components/MainHeader/MainHeader";
import Admin from "./components/Admin/FullAdmin/Admin";
import {SiteAdmin} from "./components/SiteAdmin";




function App() {
  return (
      <BrowserRouter>
          <div className={'App'}>
              <MainHeader/>
              {/*<Switch>*/}
              {/*    <Route path='/admin/:id' render={() => <Admin/>}/>*/}
              {/*    <Route path='/admin/site' render={() => <SiteAdmin/>}/>*/}
              {/*</Switch>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
