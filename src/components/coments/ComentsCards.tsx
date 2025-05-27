import React from "react";
import "./styles/main.scss";

interface ComentsInfos {
    imgCliente: string;
    nomeCliente: string;
    comentario: string;
    stars: string;
}

const ComentsCards: React.FC<ComentsInfos> = (props) => {
  return (
    <>
      <div id="avaliacaoContainer">
        <div id="clienteInfos">
          <img src={props.imgCliente} alt="Foto do Cliente" />
          <div id="cliente">
            <h3>{props.nomeCliente}</h3>
            <span>{props.stars}</span>
          </div>
        </div>
        <div id="avaliacao">
          <p>{props.comentario}</p>
        </div>
      </div>
    </>
  );
};

export default ComentsCards;
