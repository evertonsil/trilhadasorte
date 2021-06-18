import React, { Component, useState } from "react";
import Modalidades from "../components/Modalidades";
import Numbers from "../components/Numbers";
import Pacotes from "../components/Pacotes";

function Home() {
  const [numbers, setNumbers] = useState([]);
  return (
    <div className="home">
      <Modalidades />
      {/* <Numbers numbers={numbers} setNumbers={setNumbers} />
      <Pacotes numbers={numbers} /> */}
    </div>
  );
}

export default Home;
