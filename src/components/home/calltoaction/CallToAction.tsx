import React from "react";
import "./styles/main.scss";

const CallToAction: React.FC = () => {
  return (
    <>
      <section>
        <div id="homeContainer">
          <div id="homeTextContainer">
            <h1>
              <span>Beleza Francesa</span> para Mulheres Sofisticadas
            </h1>
            <p>
              Descubra o segredo da beleza francesa com nossa linha exclusiva de <br/>
              cosméticos de luxo, formulados com ingredientes naturais da
              França.
            </p>
          </div>
          <div>
            <button className="btnExplore">
              Explorar Produtos
              <img
                src="src\assets\arrow-pointing-right_1131.png"
                alt="Seta para direita"
              />
            </button>
            <button className="btnHistory"> Nossa História </button>
          </div>
        </div>
        <img id="homeImage" src="src\assets\home-img.jpg" alt="Home Image" />
      </section>
    </>
  );
};

export default CallToAction;
