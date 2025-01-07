import { styled } from 'styled-components';


/* Landing Page Menu */

export const LpBackground = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #590D22;
    padding-top: 50px;
    height: 100vh;
    font-family: "Montserrat", serif;
    font-weight: 400;
    color: #FFFFFF;
`;

export const LpMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

export const LpLogoDx = styled.img`
    width: 47px;
    height: 50px;
`;

export const CursiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CursiveLogo = styled.img`
    width: 208px;
    height: 80px;
`;


export const ChangeIdiome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    &:hover {
        cursor: pointer;
    }
`;
    
export const CountryFlag = styled.img`
    height: 23px;
    width: 32px;
`;

export const SelectFlag = styled.p`
    font-size: 0.9rem;
`;
    

/* Landing Page Body */


export const LpBodyContainer = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 1fr;
`;

export const CursivePara = styled.h2`
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
    grid-column: span 2;
    padding-bottom: 3rem;
`;

export const PromoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
`;

export const PromoValue = styled.p`
    font-size: 1.3rem;
`;

export const Promotions = styled.img`
    height: 13rem;
`;

export const LpCTAContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
`;

export const CTAPara = styled.p`
    font-size: 1rem;
    text-align: center;
    width: 23rem;
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 5rem;
    background-color: #FFF0F3;
    font-size: 1rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #590D22;
    box-shadow: 0 0 15px 2px rgb(255, 240, 243, 0.25);
    height: 3.5rem;
    width: 18rem;

    &:hover {
        cursor: pointer;
        background-color:rgb(252, 226, 232);
    }
    &:active {
        box-shadow: inlet 5px 5px 5px black;
    }
`;

/* Landing Page Footer */

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 100%;
    background-color: #FFECEF;
`;

export const InfiniteScroll = styled.div`
    display: flex;
    gap: 5rem;
    overflow: hidden;
    width: 80%;
`;

export const FooterLogo = styled.img`
    height: 3rem;
`;
    