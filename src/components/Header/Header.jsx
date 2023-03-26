import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <ul className="nav-list">
          <li className="list-item">
            <a href="#">Order</a>
          </li>
          <li className="list-item">
            <a href="#">Order Review</a>
          </li>
          <li className="list-item">
            <a href="#">Manage Inventory</a>
          </li>
          <li className="list-item">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
