import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Lotomania from "./modalidade/Lotomania";
import Lotofacil from "./modalidade/Lotofacil";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
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
