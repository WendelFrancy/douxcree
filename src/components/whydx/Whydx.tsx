import React from "react";
import "./styles/main.scss";
import SecTitle from "../global/globalcomps/SecTitle";

//Transformar as divs repetidas em um único componente e alterar ela através de props

const Whydx: React.FC = () => {
  return (
    <>
      <section id="wdxSection">
        <div id="wdxContainer">
          <SecTitle
            titulo="Por que escolher"
            tituloColorido="DOUXCREE"
            subTitulo="Nossa marca combina a tradição francesa de beleza com ingredientes
          premium e tecnologia avançada."
          />
          <div id="wdxCardContainer">
            <div className="cardContainer">
              <img
                className="cardImg"
                src="src\assets\obsolete-assets\lolalogo.png"
                alt=""
              />
              <h3> Ingredientes Naturais </h3>
              <p>
                {" "}
                Utilizamos apenas ingredientes naturais selecionados das
                melhores regiões da França.{" "}
              </p>
            </div>
            <div className="cardContainer">
              <img
                className="cardImg"
                src="src\assets\obsolete-assets\lolalogo.png"
                alt=""
              />
              <h3> Fórmulas Exclusivas </h3>
              <p>
                {" "}
                Nossas fórmulas são desenvolvidas por especialistas em
                cosmetologia francesa.
              </p>
            </div>
            <div className="cardContainer">
              <img
                className="cardImg"
                src="src\assets\obsolete-assets\lolalogo.png"
                alt=""
              />
              <h3> Sustentabilidade </h3>
              <p>
                {" "}
                Comprometidos com embalagens recicláveis e processos de produção
                sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whydx;
