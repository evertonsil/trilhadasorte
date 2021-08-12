import React, { Component, useState } from "react";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";
import "./style.css";


function Coins() {
  // const [numbers, setNumbers] = useState([]);
  return (
    <div className="coins">
      <h1>Coins</h1>

        <ul className="div-ul-pacote-coin">
          <li>
            <div className="pacote-coin">
              <div className="header-pacote-coin">
                <h2>30 trilha coins</h2>
              </div>
              <div className="body-pacote-coin">
                arte
              </div>
              <div className="footer-pacote-coin">
                <p>R$ 29,90</p>
              </div>
            </div>
          </li>
          <li>
            <div className="pacote-coin">
              <div className="header-pacote-coin">
                <h2>60 trilha coins</h2>
              </div>
              <div className="body-pacote-coin">
                arte
              </div>
              <div className="footer-pacote-coin">
                <p>R$ 49,90</p>
              </div>
            </div>
          </li>
          <li>
            <div className="pacote-coin">
              <div className="header-pacote-coin">
                <h2>150 trilha coins</h2>
              </div>
              <div className="body-pacote-coin">
                arte
              </div>
              <div className="footer-pacote-coin">
                <p>R$ 99,90</p>
              </div>
            </div>
          </li>

          <li>
            <div className="pacote-coin">
              <div className="header-pacote-coin">
                <h2>240 trilha coins</h2>
              </div>
              <div className="body-pacote-coin">
                arte
              </div>
              <div className="footer-pacote-coin">
                <p>R$ 149,90</p>
              </div>
            </div>
          </li>
          <li>
            <div className="pacote-coin">
              <div className="header-pacote-coin">
                <h2>360 trilha coins</h2>
              </div>
              <div className="body-pacote-coin">
                arte
              </div>
              <div className="footer-pacote-coin">
                <p>R$ 199,90</p>
              </div>
            </div>
          </li>
          <li>
            <div className="pacote-coin">
              <div className="header-pacote-coin">
                <h2>2000 trilha coins</h2>
              </div>
              <div className="body-pacote-coin">
                arte
              </div>
              <div className="footer-pacote-coin">
                <p>R$ 999,90</p>
              </div>
            </div>
          </li>
        </ul>

    </div>
  );
}

export default Coins;
