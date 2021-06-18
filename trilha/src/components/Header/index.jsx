import React from "react";
import "./style.css";
import logo from "../../imgs/logo_trilha.png";

const Header = () => (
  <div className="header">
    <a href="/">
      <img src={logo} />
    </a>
  </div>
);

export default Header;
