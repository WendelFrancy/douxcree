import styled from 'styled-components'

export const ProductsCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const Card = styled.div`
    height: 19rem;
    width: 15rem;
    border-radius: .4rem;
    border: 1px solid rgba(0,0,0,.3);
`;

export const CardInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 10rem;
    border-top: 1px solid black;
`;

export const CardValue = styled.p`
    font-weight: 400;
`;
