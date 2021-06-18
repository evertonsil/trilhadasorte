import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modalidades from "./components/Modalidades";
import Numbers from "./components/Numbers";
import Pacotes from "./components/Pacotes";

import Routes from "./routes";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
