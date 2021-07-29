import React, { Component, useState } from "react";
import Modalidades from "../components/Modalidades";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";
import "./style.css";

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
  // const [numbers, setNumbers] = useState([]);
  return (
    <div className="home">
      {/* <Subheader/> */}
      <Modalidades />
      {/* {dboperations} */}
      {/* <Numbers numbers={numbers} setNumbers={setNumbers} />
      <Pacotes numbers={numbers} /> */}
    </div>
  );
}

export default Home;
