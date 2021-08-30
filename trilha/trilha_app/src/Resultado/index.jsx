import React from 'react'
import "./style.css";


export default ({ location }) => {
    const result = location.state.result
    return (
        <div className="all-results">
            <h1>Resultado dos números escolhidos</h1>

            <ul id="id-ul-results">
                <li id="id-li-results">Id Reslutado</li>
            {
                result.map(games => 
                    (<>
                        <li id="id-li-results">
                            {
                            games.map(game => (<span>{game}</span>))
                            }
                        </li>
                     </>)
                )
            }
            </ul>


        </div>
    )
}