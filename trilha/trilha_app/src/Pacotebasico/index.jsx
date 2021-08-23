import React, { useState, useEffect } from "react";
import "./style.css";
import BtnOk from "../components/Buttons/BtnOk"
import axios from "axios";


const PacoteBasico = ({n}) => {

   const [game, setGame] = useState([]);

  function getLastresults(){
    axios.get("http://localhost:3010/game/lastresult").then(
      // axios.get("http://localhost:3010/game/cltescolhefacil").then(
    // axios.get("http://localhost:3010/game/getjogosbons").then(
       response => {
         console.log(response.data + " console teste supheader ");
         setGame(Object.keys(response.data[0][0]).map(key => response.data[0][0][key]))
      }
    )
  }
  useEffect(function(){
    getLastresults()
  }, [])
  
  return (
  <div>
    <div className="pacote-basico">
     <table>
  <tr>
    <th>Selecione até 19 números entre 01 e 25:</th>
    <th>Completar todos<input id="Allchecks" type="checkbox"/>
    </th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>
           {/* onInput={() => {this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')}}  */}
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"  placeholder = {(n) => n} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
      </ul>
      </td>
      <td><input type="checkbox" id="usrInput" name="testcheck" checked={false}/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
      </ul>
      </td>
      <td><input type="checkbox" /></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2"/>
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
</table>

    <BtnOk/>


    </div>
    </div>
  
);
}

export default PacoteBasico;
