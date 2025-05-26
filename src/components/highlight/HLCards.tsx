import React from 'react';
import "./styles/main.scss";

interface CardProps {
    nomeProduto: string;
    descricaoProduto: string;
    valorProduto: string;
    avaliacaoProduto: string;
    imgCard: string;
}

const HLCards: React.FC<CardProps> = (props) => {
    return(
        <>
        <div id='cardContainer'>
            <div id='imgContainer'>
                <img src={props.imgCard} alt="Imagem do Produto}" />
            </div>
            <div id='textContainer'>
                <p id='nomeProduto'>{props.nomeProduto}</p>
                <p id='descricaoProduto'>{props.descricaoProduto}</p>
                <div id='valoresContainer'>
                    <p>{props.valorProduto}</p>
                    <span>{props.avaliacaoProduto}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default HLCards