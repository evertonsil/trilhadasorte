import React, { useState, useEffect } from "react";
import "./style.css";
import brasil from "../../imgs/brasil.png";
import Numbers from "../../components/Numbers";
import Pacotes from "../../components/Pacotes";

import axios from "axios";


function Lotofacil(){
  const [game, setGame] = useState([]);
  const [numbers, setNumbers] = useState([]);
  function getLastresults(){
    axios.get("http://localhost:3010/game/lastresult").then(
      response => {
        setGame(Object.keys(response.data[0][0]).map(key => response.data[0][0][key]))
      }
    )
  }
  useEffect(function(){
    getLastresults()
  }, [])

  function concdata() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}/${month < 10 ? `0${month}` : ` ${month}`}/${year}`;
  }



  return (
    <div>
        <div className="all-lotofacil">
          <div className="modalidades">
            {/* <div className="title-modalidade">
              <h1>ESCOLHA SUA MODALIDADE</h1>
            </div> */}
            <div className="row-modalidade">
              <div className="colum-modalidade">
                <div className="modalidade-1" id="id-lotofacil">
                  <div className="div-img-brasil">
                    <img src={brasil} />
                  </div>
                  <h2>Lotofácil</h2>
                </div>
                <div className="concurso">
                  <h2>Concurso</h2>
                  <span>{concdata()}</span>
                </div>
                <div className="resultado-loteria">
                          <ul>
                            {game.map(g => <li>{g}</li>)}
                          </ul>
                </div>
              </div>
            </div>
          </div>

          <Numbers numbers={numbers} setNumbers={setNumbers} />
        </div>
          <Pacotes numbers={numbers} />
      </div>
  );
};

export default Lotofacil;
