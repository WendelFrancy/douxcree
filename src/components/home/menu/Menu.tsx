import React from "react";
import NavMenu from "../NavMenu"; 
import "./styles/main.scss";

const Menu: React.FC = () => {
  return (
    <>
    <menu id="fixedMenu">
      <img id="dxlogo" src="src\assets\landingpage\dxlogoblack.png" alt="Douxcree" />
      <NavMenu/>
      <div className="userOptions">
        <img className="iconOptions" src="src\assets\lupa.png" alt="Search" />
        <img className="iconOptions" src="src\assets\login.png" alt="Login" />
        <img className="iconOptions" src="src\assets\heart_12534090.png" alt="Favoritos" />
        <button className="btncart"> 
            <img src="src\assets\cart.png" alt="Carrinho" />
            Carrinho
            <span>(0)</span>
        </button>
      </div>
    </menu>
    </>
  );
};

export default Menu;
