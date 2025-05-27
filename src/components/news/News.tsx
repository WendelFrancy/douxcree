import React from 'react';
import './styles/main.scss';
import SecTitle from '../global/globalcomps/SecTitle';

const News: React.FC = () => {
    return(
        <>
            <section id='newsSec'>
                <div id='newsContainer'>
                    <SecTitle
                    titulo='Receba Novidades e'
                    tituloColorido='Ofertas Exclusivas'
                    subTitulo='Inscreva-se em nossa newsletter e seja a primeira a conhecer nossos lançamentos e promoções especiais.'
                    />
                    <div id='subscribeContainer'>
                        <input id="inputSubs" type="text" placeholder='Seu melhor e-mail' />
                        <button id='btnSubscribe' type="submit">Inscrever-se</button>
                    </div>
                </div>
                

            </section>
        </>
    )
}

export default News