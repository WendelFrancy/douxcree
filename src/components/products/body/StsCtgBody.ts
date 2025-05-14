import styled from 'styled-components'

export const FullBody = styled.div`
    padding: 3rem 5% 0 5%;
    background-color: #FAF7F5;
    font-family: "Montserrat", sans-serif;
`;

export const PromoContainer = styled.section`
    display: grid;
    place-items: center;
`;

// Por enquanto, terá font-family e font-weight, mas depois será apenas imagem promocional.
export const Promotions = styled.div`
    display: grid;
    place-items: center;

    font-weight: 500;

    height: 10rem;
    width: 80%;
    background-color: #EBD4C4;
`;

// Aqui vai precisar ser grid mesmo, pq senão não vai dar pra controlar o tamanho do aside.
export const ProductContainer = styled.section`
    display: grid;
    grid-template-columns: 20% 80%;
    margin: 3rem 5% 0 5%;
    gap: 3rem;
`;

