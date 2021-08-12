import React, {useState, useEffect } from "react";
import "./style.css";

import axios from "axios";


// const dboperations = dboperations.getLastresults();


function Supheader(){
  const [game, setGame] = useState([]);
  function getLastresults(){
    axios.get("http://localhost:3010/game/lastresult").then(
      response => {
        // console.log(response.data);
        setGame(response.data.data)
      }
    )
  }
  useEffect(function(){
    getLastresults()
  }, [])
  return(
        <div className="sup-header">
          <marquee><p>Lotofácil | <a href="#">Concurso 2282</a> 1 2 4 5 6 10 11 12 13 14 18 20 21 23 24</p></marquee>
        </div>
  )
}



export default Supheader;
