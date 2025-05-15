import React from "react";
import "./styles/main.scss";

const CallToAction: React.FC = () => {
  return (
    <>
      <section>
        <div id="secContainer">
          <h1>Beleza Francesa para Mulheres Sofisticadas</h1>
          <p>
            Descubra o segredo da beleza francesa com nossa linha exclusiva de
            cosméticos de luxo, formulados com ingredientes naturais da França.
          </p>
        </div>
        <div>
          <button>
            {" "}
            Explorar Produtos
            <img
              src="src\assets\arrow-pointing-right_1131.png"
              alt="Seta para direita"
            />
          </button>
          <button> Nossa História </button>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
