import React, { useState } from "react";
import "./style.css";
import brasil from "../imgs/brasil.png";
import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";

const PacoteBasico = ({ numbers }) => (
  <div>
    <div className="pacote-basico">
     <table>
  <tr>
    <th>Selecione até 19 números entre 01 e 25:</th>
    <th>Completar todos <input type="checkbox"/></th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>
          {/* <input max="25" type="number" value={numbers.map((n) => n)}/>  */}
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
        <li>
          <input max="25"type="number"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
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
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
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
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
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
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
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
  <tr>
  <td>
      <ul>
        <li>
          <input max="25"type="number"/>
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
    </div>
  
);

export default PacoteBasico;
