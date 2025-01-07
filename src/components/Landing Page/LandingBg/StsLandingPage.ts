import { styled } from 'styled-components';


/* Landing Page Menu */

export const LpBackground = styled.section`
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
    
export const CursivePara = styled.h2`
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 15px;
`;

    
/* Landing Page Body */

export const LpBodyContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center
`;

export const PromoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PromoValue = styled.p`
    font-size: 1.3rem;
`;

export const Promotions = styled.img`
    height: 14rem;
`;

export const LpCTAContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const CTAPara = styled.p`
    font-size: 1rem;
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 5rem;
    color: #590D22;
    height: 3.5rem;
    width: 18rem;
`;



    
    