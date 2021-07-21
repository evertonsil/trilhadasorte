import React from "react";
import "./style.css";
import Numbers from "../Numbers";

const Pacotes = ({ numbers }) => (
  <div>
    <div className="pacotes">
      <div className="title">
        <h1>PACOTES</h1>
      </div>
      <div className="all-packs">
        <div className="pacote" id="pacote-cheap">
          <ul id="id-packet-num">
            {numbers.slice(0, 5).map((n) => (
              <li>{n}</li>
            ))}
          </ul>
          <h1>PLANO BÁSICO</h1>
          <p>Numero escolhidos ou nao</p>
          <p>Aumente em X% suas chances</p>
          <p>10 combinações</p>
          <button id="id-btn-comprar">
            <a href="#">30 fichas</a>
          </button>
        </div>

        <div className="pacote" id="pacote-premium">
          <ul>
            {numbers.slice(0, 19).map((n) => (
              <li>{n}</li>
            ))}
          </ul>
          <h1>PLANO PREMIUM</h1>
          <p>Numero escolhidos ou nao</p>
          <p>Aumente em Y% suas chances</p>
          <p>30 combinações por jogo até o fim do mês</p>
          <button id="id-btn-comprar">
            <a href="#">70 fichas</a>
          </button>
        </div>

        <div className="pacote" id="pacote-medium">
          <ul>
            {numbers.slice(0, 9).map((n) => (
              <li>{n}</li>
            ))}
          </ul>
          <h1>PLANO MEDIUM</h1>
          <p>Numero escolhidos ou nao</p>
          <p>Aumente em Z% suas chances</p>
          <p>20 combinações por jogo até o fim do mês</p>
          <button id="id-btn-comprar">
            <a href="#">50 fichas</a>
          </button>
        </div>

        {/* <div className="pacote" id="pacote-manual">
        <ul>
          <li>X</li>
          <li>X</li>
          <li>X</li>
          <li>X</li>
          <li>X</li>
        </ul>
        <h1>MANUAL</h1>
        <p>1 jogo</p>
        <p>1 sorteio</p>
        <p>R$ 5,00</p>
        <button id="id-btn-comprar">COMPRAR</button>
      </div> */}
      </div>
    </div>
  </div>
);

export default Pacotes;
