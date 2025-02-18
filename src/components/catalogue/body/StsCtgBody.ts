import styled from 'styled-components'

export const FullBody = styled.div`
    padding: 3rem 5% 0 5%;
`;

export const PromoContainer = styled.section`
    display: grid;
    place-items: center;
`;

// Por enquanto, terá font-family e font-weight, mas depois será apenas imagem promocional.
export const Promotions = styled.div`
    display: grid;
    place-items: center;

    font-family: "Montserrat", serif;
    font-weight: 500;

    height: 10rem;
    width: 80%;
    background-color: rgba(0,0,0,0.05);
`;

// Aqui vai precisar ser grid mesmo, pq senão não vai dar pra controlar o tamanho do aside.
export const ProductContainer = styled.section`
    display: grid;
    grid-template-columns: 20% 80%;
    margin-top: 3rem;
    gap: 3rem;
`;

