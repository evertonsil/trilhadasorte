import React, { Component, useState } from "react";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";
import "./style.css";
import Btncancel from "../components/Buttons/BtnCancel";
import Btnok from "../components/Buttons/BtnOk";
import BtnCadastro from "../components/Buttons/BtnCadastro";


function Cadastro() {
  // const [numbers, setNumbers] = useState([]);
  return (

<div>
<header>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> 
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script> 
</header>
    <div className="cadastro">
      <h1>Cadastro</h1>

      <form>
        <div className="div-input">
          <label>Nome Completo</label>
          <input type="text" placeholder=" nome" name="nome"/>
        </div>
        <div className="div-input">
          <label>Email</label>
          <input type="email" placeholder=" email" name="email"/>
        </div>
        <div className="div-input">
          <label>CPF</label>
          <input type="text" placeholder=" cpf" name="cpf"/>
        </div>
        <div className="div-input">
          <label>Data de nascimento</label>
          <input type="text" placeholder=" birthday" name="birthday"/>
        </div>
        <div className="div-input">
          <label>Whatsapp</label>
          <input type="text" id="phoneWhatsapp" placeholder=" (XX) 9 XXXX-XXXX" name="whatsapp"/>
        </div>
        <div className="div-input">
          <label>Senha</label>
          <input type="password" placeholder=" insira uma senha segura" name="senha"/>
        </div>
        <div className="div-input">
          <label>Repita a senha</label>
          <input type="password" placeholder=" Repita a senha" name="senhaconfirm"/>
        </div>
        <div className="div-input">
          <label>CEP</label>
          <input type="text" placeholder=" XXXXX-XXX" name="whatsapp"/>
        </div>
        <div className="div-input">
          <label>Estado</label>
          <select id="estado" name="estado">
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
            </select>
        </div>
        <div className="btns">
        <Btncancel/>
        <BtnCadastro/>
        </div>

      </form>
      <script type="text/javascript">
          $("#phoneWhatsapp).mask("(00)9 0000-0000");
          $("#document1").mask("000.000.000-00");
          $("#document2").mask("00.000.000/0000-00");
      </script>
    </div>

    
    </div>
    
  );
}

export default Cadastro;
