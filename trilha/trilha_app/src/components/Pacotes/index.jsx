import React from "react";
import "./style.css";

const Pacotes = ({ numbers }) => (
  <div>
    <div className="pacotes">
      <div className="title">
        <h1>PACOTES</h1>
      </div>
      <div className="all-packs">
        <div className="pacote" id="pacote-cheap">
          <div className="pacote-cheap-title">
            <h1>PLANO BÁSICO</h1>
          </div>
          <div className="pacote-cheap-body">
            <ul id="id-packet-num">
              {numbers.slice(0, 19).map((n) => (
                <li>{n}</li>
              ))}
            </ul>
            <p>Aumente em X% suas chances</p>
            <p>10 combinações</p>
          </div>
          <div className="pacote-cheap-footer">

            <button id="id-btn-comprar">
              <a href="/Pacotebasico">30 fichas</a>
            </button>
          </div>
        </div>

        <div className="pacote" id="pacote-premium">
          <div className="pacote-premium-title">
            <h1>PLANO PREMIUM</h1>
          </div>
          <div className="pacote-premium-body">
            <ul>
              {numbers.slice(0, 19).map((n) => (
                <li>{n}</li>
              ))}
            </ul>
            <p>Aumente em Y% suas chances</p>
            <p>30 combinações por jogo até o fim do mês</p>
          </div>
          <div className="pacote-premium-footer">
            <button id="id-btn-comprar">
              <a href="/Pacotebasico">70 fichas</a>
            </button>
          </div>
        </div>

        <div className="pacote" id="pacote-medium">
          <div className="pacote-premium-title">
            <h1>PLANO MÉDIO</h1>
          </div>
          <div className="pacote-premium-body">
            <ul>
              {numbers.slice(0, 18).map((n) => (
                <li>{n}</li>
              ))}
            </ul>
            <p>Aumente em Z% suas chances</p>
            <p>20 combinações por jogo até o fim do mês</p>
          </div>
          <div className="pacote-premium-footer">
            <button id="id-btn-comprar">
              <a href="/Pacotebasico">50 fichas</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pacotes;
