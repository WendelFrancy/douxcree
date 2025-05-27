import React from "react";
import ComentsCards from "./ComentsCards";
import SecTitle from "../global/globalcomps/SecTitle";
import "./styles/main.scss";

const Coments: React.FC = () => {
  return (
    <>
      <section id="comentsSec">
        <div id="comentsSecContainer">
          <SecTitle
            titulo="O que nossas"
            tituloColorido="Clientes Dizem"
            subTitulo="Descubra por que mulheres sofisticadas de todo o Brasil escolhem DOUXCREÉ."
          />
          <div id="cardsContainer">
            <ComentsCards
                imgCliente="src\assets\obsolete-assets\lolalogo.png"
                nomeCliente="Wendel Francy"
                comentario='"Os produtos da DOUXCREÉ transformaram minha rotina de skincare. Minha pele nunca esteve tão radiante!"'
                stars="****"
            />
            <ComentsCards
                imgCliente="src\assets\obsolete-assets\lolalogo.png"
                nomeCliente="Wendel Francy"
                comentario='"Sou apaixonada pela fragrância Élégance. Recebo elogios toda vez que uso, é simplesmente divina."'
                stars="****"
            />
            <ComentsCards
                imgCliente="src\assets\obsolete-assets\lolalogo.png"
                nomeCliente="Wendel Francy"
                comentario='"A qualidade dos produtos é incomparável. Vale cada centavo investido na minha beleza."'
                stars="****"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Coments;
