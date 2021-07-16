import React from "react";
import "./style.css";
import logo from "../../imgs/logo_trilha.png";


const Header = () => (
  <div className="header">
    

    <a href="/">
      <img src={logo} />
    </a>

   


    <div className="login-logon">
      <div className="login-div">
        <p className="login-p">
          Login
        </p>
      </div>
      <div className="logon-div">
        <p className="logon-p">
          Cadastro
        </p>
      </div>
    </div>

  </div>
);

export default Header;
