import React from "react";
import logo from "../../ascets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header">
      <img src={logo} alt="Instagram" className="app__headerImage" />
    </div>
  );
};

export default Header;
