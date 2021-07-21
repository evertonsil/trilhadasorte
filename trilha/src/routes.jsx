import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Lotomania from "./modalidade/Lotomania";
import Lotofacil from "./modalidade/Lotofacil";

import About from "./About";
import Coins from "./Coins";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Perfil from "./Perfil";




const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Coins" component={Coins} />
      <Route path="/About" component={About} />
      <Route path="/Login" component={Login} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Perfil" component={Perfil} />
      <Route path="/Lotomania" component={Lotomania} />
      <Route path="/Lotofacil" component={Lotofacil} />
      <Route
        path="*"
        component={() => (
          <h1 style={{ margin: "15%", color: "white" }}>Page not found :(</h1>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
