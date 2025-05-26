import React from 'react';
import "./styles/main.scss";
import SecTitle from '../global/globalcomps/SecTitle';
import HLCards from './HLCards';

const HighLights: React.FC = () => {
    return(
        <>
            <section id='highLightsSec'>
                <div id='highLContainer'>
                    <SecTitle
                    titulo='Produtos'
                    tituloColorido='Em Destaque'
                    subTitulo='Conheça nossa seleção de produtos mais amados pelas clientes.'
                    />
                    <div id='cardsContainer'>
                        <HLCards
                        imgCard='src\assets\obsolete-assets\FRELKESERUM.png'
                        nomeProduto='Sérum Facial Illuminé'
                        descricaoProduto='Sérum hidratante com ácido hialurônico e vitamina C'
                        valorProduto='R$ 189,00'
                        avaliacaoProduto='*****'
                        />
                        <HLCards
                        imgCard='src\assets\obsolete-assets\FRELKECLEASING.png'
                        nomeProduto='Creme Noturno Rêverie'
                        descricaoProduto='Creme rejuvenescedor com extrato de lavanda francesa'
                        valorProduto='R$ 210,00'
                        avaliacaoProduto='*****'
                        />
                        <HLCards
                        imgCard='src\assets\obsolete-assets\FRELKEBTM2.png'
                        nomeProduto='Perfume Élégance'
                        descricaoProduto='Fragância floral com notas de jasmin e baunilha'
                        valorProduto='R$ 350,00'
                        avaliacaoProduto='*****'
                        />
                        <HLCards
                        imgCard='src\assets\obsolete-assets\FRELKESABON.png'
                        nomeProduto='Máscara Facial Éclat'
                        descricaoProduto='Máscara de argila com extratos botânicos franceses'
                        valorProduto='R$ 120,00'
                        avaliacaoProduto='*****'
                        />
                    </div>
                    <div id='btnContainer'>
                        <button> Ver Todos os Produtos 
                            <img src="src\assets\cart.png" alt="Carrinho de Compras" />
                        </button>
                    </div>
                </div>
            </section>    
        </>
    )
}

export default HighLights