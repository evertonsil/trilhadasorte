import React, { useState } from "react";
import "./style.css";
import brasil from "../imgs/brasil.png";
import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";

const PacoteBasico = () => {
  function concdata() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}/${month < 10 ? `0${month}` : ` ${month}`}/${year}`;
  }

  const [numbers, setNumbers] = useState([]);

  return (
    <div className="pacote-basico">
     <table>
  <tr>
    <th>Selecione até 19 números:</th>
    <th>Completar todos</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
      </ul>
      </td>
    <td><input max="100"type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
      </ul>
      </td>
    <td><input max="100"type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
      </ul>
      </td>
    <td><input max="100"type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
      </ul>
      </td>
    <td><input max="100"type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input max="100"type="number"/>
        </li>
      </ul>
      </td>
    <td><input max="100"type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="100"type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
        <li>
          <input type="number"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
</table>
    </div>
  );
};

export default PacoteBasico;
