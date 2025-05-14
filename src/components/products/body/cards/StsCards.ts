import styled from 'styled-components'

export const ProductsCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const Card = styled.div`
    display: grid;
    grid-template-rows: 70% 30%;
    height: 19rem;
    width: 15rem;
    border-radius: .4rem;
    border: 1px solid rgba(0,0,0,.3);
    background-color: white;
    &:hover{
        grid-template-rows: 65% 25% 10%;
        .buyNow{
            display: grid;
        }
    }

`;

export const CardImgContainer = styled.div`
    display: grid;
    place-items: center;
`;

export const CardImage = styled.img`
    height: 10rem;
`;

export const CardInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: .5rem .5rem;
    border-top: 1px solid rgba(0,0,0,.3);
`;

export const CardInfos = styled.p`
    font-weight: 400;
`;

export const Parcelas = styled.p`
    font-size: .7rem;
    color: gray;
`;

export const BuyNow = styled.button`
    display: none;
    place-items: center;
    width: 10rem;
    font-size: 1rem;
    letter-spacing: 1px;
    border: 1px solid rgba(0,0,0,.3);
    border-radius: .4rem;
    &:hover{
        background-color: #EDBB7C;
        color: white;
    }
`;
