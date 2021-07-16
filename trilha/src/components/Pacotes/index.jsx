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
          <h1>BARATO</h1>
          <p>10 jogos</p>
          <p>5 sorteio</p>
          <p>R$ 15,00</p>
          <button id="id-btn-comprar">
            <a href="#">COMPRAR</a>
          </button>
        </div>

        <div className="pacote" id="pacote-premium">
          <ul>
            {numbers.slice(0, 19).map((n) => (
              <li>{n}</li>
            ))}
          </ul>
          <h1>PREMIUM</h1>
          <p>100 jogos</p>
          <p>50 sorteios</p>
          <p>R$ 200,00</p>
          <button id="id-btn-comprar">
            <a href="#">COMPRAR</a>
          </button>
        </div>

        <div className="pacote" id="pacote-medium">
          <ul>
            {numbers.slice(0, 9).map((n) => (
              <li>{n}</li>
            ))}
          </ul>
          <h1>MEDIUM</h1>
          <p>50 jogos</p>
          <p>25 sorteios</p>
          <p>R$ 100,00</p>
          <button id="id-btn-comprar">
            <a href="#">COMPRAR</a>
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
