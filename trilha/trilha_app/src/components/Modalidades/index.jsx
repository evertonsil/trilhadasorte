import React, {useState, useEffect } from "react";
import "./style.css";
import brasil from "../../imgs/brasil.png";
import axios from "axios";

function Modalidades () {
  const [game, setGame] = useState([]);
  function getLastresults(){
    axios.get("http://localhost:3010/game/cltescolhefacil").then(
      response => {
        console.log(response.data + "console teste modalidades");
        // setGame(Object.keys(response.data[0][0]).map(key => response.data[0][0][key]))
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
      <div className="modalidades">
        <div className="title-modalidade">
          <h1>ESCOLHA SUA MODALIDADE</h1>
        </div>
        <div className="row-modalidade">
          <div className="colum-modalidade">
            <a href="./Lotofacil">
              <div className="modalidade-1" id="id-lotofacil">
                <div className="div-img-brasil">
                  <img src={brasil} />
                </div>
                <h2>Lotofácil</h2>
              </div>
            </a>
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
          <div className="colum-modalidade">
            <a href="./Lotomania">
              <div className="modalidade-2" id="id-lotomania">
                <div className="div-img-brasil">
                  <img src={brasil} />
                </div>
                <h2>Lotomania</h2>
              </div>
            </a>
            <div className="concurso">
              <h2>Concurso</h2>
              <span>{concdata()}</span>
            </div>
            <div className="resultado-loteria">
              <ul>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>

                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
              </ul>
            </div>
          </div>
          {/* <div className="colum-modalidade">
            <a href="./Lotofacil">
              <div className="modalidade-1" id="id-lotofacil">
                <div className="div-img-brasil">
                  <img src={brasil} />
                </div>
                <h2>Lotofácil</h2>
              </div>
            </a>
            <div className="concurso">
              <h2>Concurso</h2>
              <span>{concdata()}</span>
            </div>
            <div className="resultado-loteria">
              <ul>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>

                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
              </ul>
            </div>
          </div>
          <div className="colum-modalidade">
            <a href="./Lotomania">
              <div className="modalidade-2" id="id-lotomania">
                <div className="div-img-brasil">
                  <img src={brasil} />
                </div>
                <h2>Lotomania</h2>
              </div>
            </a>
            <div className="concurso">
              <h2>Concurso</h2>
              <span>{concdata()}</span>
            </div>
            <div className="resultado-loteria">
              <ul>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>

                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modalidades;
