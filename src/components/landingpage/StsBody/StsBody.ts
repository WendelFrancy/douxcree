import {styled} from "styled-components";

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const Brushes = styled.img`
    height: 80%;
`;

export const CursiveTitle = styled.h2`
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2rem;
`;


export const CTAPara = styled.p`
    font-family: "Montserrat", serif;
    font-size: 1rem;
    text-align: center;
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 5rem;
    background-color: #FFF0F3;
    padding: 1rem 3rem;
    font-size: 1rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #590D22;
    box-shadow: 0 0 15px 2px rgb(255, 240, 243, 0.25);

    &:hover {
        cursor: pointer;
        background-color:rgb(252, 226, 232);
    }
    &:active {
        box-shadow: inlet 5px 5px 5px black;
    }
`;

export const LpSectionBg = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 2.5rem;
    height: 15rem;
    width: 40rem;
    background-color: #EBEBEB;
    box-shadow: 0px 2px 4px 1px rgb(0,0,0,.25);
    border-radius: 1rem;
`;

export const LpMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    
    &:hover {
        cursor: pointer;
    }
`;

export const FlagContainer = styled.img`
    width: 2rem;

`;
