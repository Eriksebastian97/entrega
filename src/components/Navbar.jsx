import React from "react";
import "./navbar.css";
import cartWidget from "./cartWidget/carrito.svg";

const navBar = () => {
  return (
    <header>
      <div className="logo">
        <h1> SOLO REACT</h1>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">contenido click</a>
          </li>
          <li>
            <a href=""> contenido click2</a>
          </li>
          <li>
            <a href="">contenido click3</a>
          </li>
        </ul>
        <div className="img">
          <img src={cartWidget} alt="" width="40" />
        </div>
      </nav>
    </header>
  );
};

export default navBar;
