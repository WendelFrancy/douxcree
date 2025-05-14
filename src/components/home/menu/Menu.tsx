import React from "react";
import NavMenu from "./NavMenu"; 
import UserOptions from "./UserOptions"
import "./styles/main.scss";

const Menu: React.FC = () => {
  return (
    <>
    <menu id="fixedMenu">
      <img id="dxlogo" src="src\assets\landingpage\dxlogoblack.png" alt="Douxcree" />
      <NavMenu/>
      <UserOptions/>
    </menu>
    </>
  );
};

export default Menu;
