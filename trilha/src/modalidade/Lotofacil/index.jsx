import React, { useState } from "react";
import "./style.css";
import brasil from "../../imgs/brasil.png";
import Numbers from "../../components/Numbers";
import Pacotes from "../../components/Pacotes";

const Lotofacil = () => {
  function concdata() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}/${month < 10 ? `0${month}` : ` ${month}`}/${year}`;
  }

  const [numbers, setNumbers] = useState([]);

  return (
    <>
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
          </div>
        </div>
      </div>

      <Numbers numbers={numbers} setNumbers={setNumbers} />
      <Pacotes numbers={numbers} />
    </>
  );
};

export default Lotofacil;
