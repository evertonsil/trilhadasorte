import React, { Component, useState } from "react";
import Modalidades from "../components/Modalidades";
import Subheader from "../components/Subheader";

import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";
import "./style.css";


function Home() {
  const [numbers, setNumbers] = useState([]);
  return (
    <div className="home">

      <Subheader/>
      <Modalidades />
      {/* <Numbers numbers={numbers} setNumbers={setNumbers} />
      <Pacotes numbers={numbers} /> */}
    </div>
  );
}

export default Home;
