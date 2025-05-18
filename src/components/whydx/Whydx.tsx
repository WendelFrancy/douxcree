import React from 'react';
import "./styles/main.scss";

const Whydx: React.FC = () => {
    return(
    <>
        <section id="WDXSection">
            <div id="WDXtxtContainer">
                <h1>Por que escolher <span>DOUXCREÉ</span></h1>
                <p>Nossa marca combina a tradição francesa de beleza com ingredientes premium e tecnologia avançada.</p>
            </div>
            <div id="WDXCardContainer">
                <div className="cardContainer">
                    <img className="cardImg" src="" alt="" />
                    <h3> Ingedientes Naturais </h3>
                    <p> Utilizamos apenas ingredientes naturais selecionados das melhores regiões da França. </p>
                </div>
                <div className="cardContainer">
                    <img className="cardImg" src="" alt="" />
                    <h3> Fórmulas Exclusivas </h3>
                    <p> Nossas fórmulas são desenvolvidas por especialistas em cosmetologia francesa.</p>
                </div>
                <div className="cardContainer">
                    <img className="cardImg" src="" alt="" />
                    <h3> Sustentabilidade </h3>
                    <p> Comprometidos com embalagens recicláveis e processos de produção sustentáveis.</p>
                </div>
            </div>
        </section>
    
    </>)
}

export default Whydx