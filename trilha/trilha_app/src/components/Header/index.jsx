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
          {/* <a href="/Coins"> */}
          <a href="https://speeak.digital/sites/loja.trilhadasorte.com.br/shop/">
            <p>Coins</p>
          </a>
        </li>
        <li >
          <a href="/About">
            <p>Sobre nós</p>
          </a>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn"><p>Modalidades</p><span id="id-span-arrow">		
            &#9660;</span></button>
            <div class="dropdown-content">
              {/* <a href="./Lotomania">Lotomania</a> */}
              <a href="./Lotofacil">Lotofacil</a>
            </div>
          </div>
        </li>
        <li className="li-login-cadastro">
          <div className="btn-login-cadastro">
            {/* <a href="/Login"> */}
            <a href="https://speeak.digital/sites/loja.trilhadasorte.com.br/login">
              <p>Login</p>
            </a>
          </div>
          <div className="btn-login-cadastro">
            {/* <a href="/Cadastro"> */}
            <a href="https://speeak.digital/sites/loja.trilhadasorte.com.br/cadastro">
              <p>Cadastro</p>
            </a>
          </div>
          <div className="btn-login-cadastro">
            {/* <a href="/Perfil"> */}
            <a href="https://speeak.digital/sites/loja.trilhadasorte.com.br/minha-conta">
              <p>Perfil</p>
            </a>
          </div>
        </li>
      </ul>


    </div>
  </div>
);


export default Header;
