import React from "react";
import "./style.css";
import brasil from "../../imgs/brasil.png";

const Modalidades = () => {
  function concdata() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}/${month < 10 ? `0${month}` : ` ${month}`}/${year}`;
  }

  return (
    <>
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
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalidades;
