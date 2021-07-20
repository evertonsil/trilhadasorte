import React, { Component, useState } from "react";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";

import Btncancel from "../components/BtnCancel";
import Btnok from "../components/BtnOk";

import "./style.css";


function Login() {
  // const [numbers, setNumbers] = useState([]);
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div className="div-input">
          <label>Email</label>
          <input type="email" placeholder="email" name="email"/>
        </div>
        <div className="div-input">
          <label>Senha</label>
          <input type="password" placeholder="insira uma senha segura" name="senha"/>
        </div>
        <div className="btns">
        <Btncancel/>
        <Btnok/>
        </div>

      </form>
    </div>
  );
}

export default Login;
