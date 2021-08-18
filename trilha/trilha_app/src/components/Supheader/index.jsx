import React, {useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

// const dboperations = dboperations.getLastresults();

function Supheader(){
  const [game, setGame] = useState([]);
  function getLastresults(){
    axios.get("http://localhost:3000/game/lastresult").then(
      // axios.get("http://localhost:3010/game/cltescolhefacil").then(
    // axios.get("http://172.20.10.249:3000/game/getjogosbons").then(
       response => {
         console.log(response.data);
        // setGame(Object.keys(response.data[0][0]).map(key => response.data[0][0][key]))
      }
    )
  }
  useEffect(function(){
    getLastresults()
  }, [])
  return(
        <div className="sup-header">
          <marquee><p>Lotofácil | <a href="#"> Concurso 2282</a>
                      <ul>
                       {game.map(g => <li>{g}</li>)}
                      </ul>
                  </p>
           </marquee>
        </div>
  )
}



export default Supheader;
