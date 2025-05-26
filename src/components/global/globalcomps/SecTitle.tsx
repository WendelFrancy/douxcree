import React from "react";
import "../globalstyles/components.scss";

interface SecTitulos {
    titulo: string;
    tituloColorido: string;
    subTitulo: string;
}

const SecTitle: React.FC<SecTitulos> = (props) => {
  return (
    <>
      <div id="secTitle">
        <h1>
          {props.titulo} <span>{props.tituloColorido}</span>
        </h1>
        <p>{props.subTitulo}</p>
      </div>
    </>
  );
};

export default SecTitle;
