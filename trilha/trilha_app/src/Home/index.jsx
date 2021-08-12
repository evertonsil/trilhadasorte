import React, { Component, useState, useEffect } from "react";
import Modalidades from "../components/Modalidades";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";
import "./style.css";

import axios from "axios";

// import bank from "../../server/conect"

// import Lastresulsts from '../server/lastresults'
// import Jogosbons from '../server/jogosbons'
//  const dboperations = ('../server/dboperations').default;

// dboperations.getLastresults().then(result => {
//     console.log(result);
// })

// dboperations.getJogosbons().then(result => {
//     console.log(result);
// })


function Home() {
  const [game, setGame] = useState([]);
  function getPuroosso(){
    axios.get("http://localhost:3010/game").then(
      response => {
        setGame(response.data.data)
      }
    )
  }
  useEffect(function(){
    getPuroosso()
  }, [])
  return (
    <div className="home">
      {/* <Subheader/> */}
      <Modalidades />
      {game.map(g => <p>{g}</p>)}
      {/* {dboperations} */}
      {/* <Numbers numbers={numbers} setNumbers={setNumbers} />
      <Pacotes numbers={numbers} /> */}
    </div>
  );
}

export default Home;
