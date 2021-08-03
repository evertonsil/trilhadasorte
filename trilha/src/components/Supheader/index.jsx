import React from "react";
import "./style.css";

import Lastresulsts from "../../server/lastresults";

// dboperations.getLastresults().then(result => {
//     console.log(result);
// })


const Supheader = ({Lastresulsts}) => (
  <div className="sup-header">
     <marquee><p>Lotofácil | <a href="#">Concurso 2282</a> {(Lastresulsts)}1 2 4 5 6 10 11 12 13 14 18 20 21 23 24</p></marquee>
  </div>
);


export default Supheader;
