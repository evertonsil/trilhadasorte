import React, { useState } from "react";
import "./style.css";
import brasil from "../imgs/brasil.png";
import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";
import BtnOk from "../components/Buttons/BtnOk"

const PacoteBasico = ({ numbers, n  }) => {




  const above26 = () =>{
    const usrInput = document.getElementById("usrInput"); 
    if( usrInput.value >= 26 ){
      alert('coloque um número entre 1 e 25');
      usrInput.addEventListener("focus", function () {
        this.style.boxShadow = "0 0 0 2pt red";  
      });
    } else{
      usrInput.style.boxShadow = "0 0 0 2pt lightskyblue";  

    }
  }
  
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
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/> 
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
      </ul>
      </td>
      <td><input type="checkbox" id="usrInput" name="testcheck" checked={false}/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
      </ul>
      </td>
      <td><input type="checkbox" /></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
      </ul>
      </td>
    <td><input  type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
      </ul>
      </td>
    <td><input type="checkbox"/></td>
  </tr>
  <tr>
  <td>
      <ul>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26}/>
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
        </li>
        <li>
          <input id="usrInput"  min="0" max="25" type="text" maxLength="2" onKeyPress={above26} />
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
