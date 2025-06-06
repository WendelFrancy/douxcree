import React from "react";
import "./styles/main.scss";

const CallToAction: React.FC = () => {
  return (
    <>
      <section id="homeSection">
        <div id="homeContainer">
          <div id="homeTextContainer">
            <h1>
              <span>Beleza Francesa</span> para Mulheres Sofisticadas
            </h1>
            <p>
              Descubra o segredo da beleza francesa com nossa linha exclusiva de
              cosméticos de luxo, formulados com ingredientes naturais da
              França.
            </p>
            <div id="homeBtnContainer">
              <button className="btnExplore">
                Explorar Produtos
                <span></span>
              </button>
              <button className="btnHistory"> Nossa História </button>
            </div>
          </div>
        <img id="homeImage" src="src\assets\home-img.jpg" alt="Home Image" />
        </div>
      </section>
    </>
  );
};

export default CallToAction;
