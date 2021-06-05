import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import MainHeader from "./components/MainHeader/MainHeader";
import Admin from "./components/Admin/Admin";


function App() {
  return (
      <BrowserRouter>
         <MainHeader/>

         <Switch>
             <Route path={`/admin/:id`} component={ Admin }/>
         </Switch>
      </BrowserRouter>
  );
}

export default App;
