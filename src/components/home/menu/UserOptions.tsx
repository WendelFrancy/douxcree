import React from "react";
import "./styles/main.scss";

const UserOptions: React.FC = () => {
  return (
    <>
      <div className="userOptions">
        <img className="iconOptions" src="src\assets\lupa.png" alt="Search" />
        <img className="iconOptions" src="src\assets\login.png" alt="Login" />
        <img
          className="iconOptions"
          src="src\assets\heart_12534090.png"
          alt="Favoritos"
        />
        <button className="btncart">
          <img src="src\assets\cart.png" alt="Carrinho" />
          Carrinho
          <span>(0)</span>
        </button>
      </div>
    </>
  );
};

export default UserOptions;
