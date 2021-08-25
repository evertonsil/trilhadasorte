import React, { Component, useState, useEffect } from "react";
import "./style.css";

class Numbers extends Component {
  state = {
    num: "",
  };

  _setNumbers(number){
    this.props.setNumbers([...this.props.numbers, number])
  }

  render() {

   
     

    const range = (start, end) => {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    var result = range(0, 25); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    console.log(result);

    return (
      <div className="all-numbs">
        <header>
          <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
        </header>
        <div className="title">
          <h1>ESCOLHA SEUS NÚMEROS FAVORITOS</h1>
        </div>
        <div className="table">
          <ul id="test">
          {result.map((n) => (
                <li><button onClick={() => this._setNumbers(n)}>{n}</button></li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Numbers;
