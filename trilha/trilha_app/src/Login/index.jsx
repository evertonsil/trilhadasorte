import React, { Component, useState } from "react";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";

import Btncancel from "../components/Buttons/BtnCancel";
import Btnok from "../components/Buttons/BtnOk";

import "./style.css";
import Btnlogin from "../components/Buttons/BtnLogin";


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
        <p>Ainda não é membro? <a href="/Cadastro">Cadastrar</a></p>
        <div className="btns">
        <Btncancel/>
        {/* <Btnok/> */}
        <Btnlogin/>
        </div>

      </form>
    </div>
  );
}

export default Login;
