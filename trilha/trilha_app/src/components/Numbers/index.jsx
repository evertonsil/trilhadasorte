import React, { Component, useState, useEffect } from "react";
import "./style.css";

class Numbers extends Component {
  state = {
    num: "",
  };

  _setNumbers(number){
    if (!this.props.numbers.includes(number))
      this.props.setNumbers([...this.props.numbers, number])
    else{
      
      this.props.setNumbers(numbers => numbers.filter(n => n != number))
    }

    console.log(this.props.numbers)
  }

  render() {
    const range = (start, end) => {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    var result = range(1, 25);

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
                <li><button 
                style={{opacity: this.props.numbers.includes(n) ? '0.5' : '1'}} 
                onClick={() => this._setNumbers(n)}>{n}</button></li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Numbers;
