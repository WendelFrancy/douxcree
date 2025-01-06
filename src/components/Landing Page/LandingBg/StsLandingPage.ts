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

/*export const SeasonalBase = styled.div`
    clip-path: ellipse(43% 8% at 50% 50%);
    height: 10rem;
    width: 20rem;
    background-color: #800F2F;
    box-shadow: 5px 5px 5px 10px white;
`;*/

export const SeasonalBase = styled.img`
    height: 2.3rem;
`;


    
    