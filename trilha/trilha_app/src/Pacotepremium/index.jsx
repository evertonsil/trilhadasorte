import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


const PacotePremium = ({ location }) => {
  const history = useHistory();
  const [game, setGame] = useState([]);

  // function getLastresults() {
  //   axios.get("http://localhost:3010/game/lastresult").then(
  //     // axios.get("http://localhost:3010/game/cltescolhefacil").then(
  //     // axios.get("http://localhost:3010/game/getjogosbons").then(
  //     response => {
  //       console.log(response.data + " console teste supheader ");
  //       setGame(Object.keys(response.data[0][0]).map(key => response.data[0][0][key]))
  //     }
  //   )
  // }
  // useEffect(function () {
  //   getLastresults()
  // }, [])


  function sendGameNumbers() {
    axios.post('http://localhost:3010/game', {numbers: location.state.numbers})
      .then(response => {
        history.push({
          pathname: '/Resultado',
          state: {
            result: response.data[0].map(games => {
              return Object.keys(games).map(gameKey => games[gameKey])
            })
          }
        })
      }).catch(error => {
        console.log('ERRRO NO ENVIO DO GAME', error)
      })
  }

  return (
    <div>
      <div className="pacote-premium">
        <table>
          <tr>
            <th>Selecione até 3 números entre 01 e 25:</th>
            {/* <th>Completar todos<input id="Allchecks" type="checkbox" /> </th> */}
          </tr>
          <tr>
            <td>
              <ul>
                {location.state.numbers.map(n => (<li>
                  <input id="usrInput" min="0" max="25" type="text" maxLength="2" value={n} />
                </li>))}
              </ul>
            </td>
            {/* <td><input type="checkbox" id="usrInput" name="testcheck" checked={false} /></td> */}
          </tr>
        </table>

        <button style={{border: 'none', padding: '5px 15px', 'border-radius': '5px', 'margin-top': '10px','background-color': 'black', color: 'white'}} onClick={sendGameNumbers}>OK</button>


      </div>
    </div>

  );
}

export default PacotePremium;
