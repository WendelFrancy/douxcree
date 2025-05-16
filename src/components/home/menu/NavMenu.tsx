import React from "react";
import "./styles/main.scss";

const NavMenu: React.FC = () => {
  return (
    <>
      <nav className="navMenu">
        <a href="#">
          {" "}
          Início
          <span></span>
        </a>
        <a href="#">
          {" "}
          Produtos
          <span></span>
        </a>
        <a href="#">
          {" "}
          Coleções
          <span></span>
        </a>
        <a href="#">
          {" "}
          Sobre Nós
          <span></span>
        </a>
        <a href="#">
          {" "}
          Contato
          <span></span>
        </a>
      </nav>
    </>
  );
};

export default NavMenu;
