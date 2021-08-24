import React, { Component, useState, useEffect } from "react";
import "./style.css";

class Numbers extends Component {
  state = {
    num: "",
  };
  render() {
    const _this = this;
    window.onload = function () {
      function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
      }

      var ul = document.getElementById("test");
      ul.onclick = function (event) {
        var target = getEventTarget(event);
        _this.props.setNumbers(_this.props.numbers.concat(target.innerHTML));
        // alert(target.innerHTML);

        if(ul.onclick){
          // ul.style.opacity = "0.2";
          // ul.style.cursor = "not-allowed"

        }
      };
    };

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
                <li><button>{n}</button></li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Numbers;
