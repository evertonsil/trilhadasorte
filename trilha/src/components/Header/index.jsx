import React from "react";
import "./style.css";
import logo from "../../imgs/logo_trilha.png";
import Supheader from "../Supheader";



const Header = () => (
  <div>
    <Supheader/>

    <div className="header">
      <ul>
        <li >
          <a href="/">
            <img src={logo} />
          </a>
        </li>
        <li >
          <a href="/">
            <p>Coins</p>
          </a>
        </li>
        <li >
          <a href="/">
            <p>Sobre nós</p>
          </a>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn"><p>Modalidades</p><span id="id-span-arrow">		
            &#9660;</span></button>
            <div class="dropdown-content">
              <a href="./Lotomania">Lotomania</a>
              <a href="./Lotofacil">Lotofacil</a>
            </div>
          </div>
        </li>
        <li className="li-login-cadastro">
          <div className="btn-login-cadastro">
            <a href="/">
              <p>Login</p>
            </a>
          </div>
          <div className="btn-login-cadastro">
            <a href="/">
              <p>Cadastro</p>
            </a>
          </div>
        </li>
      </ul>


    </div>
  </div>
);


export default Header;
