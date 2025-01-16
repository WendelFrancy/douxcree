import {keyframes, styled} from "styled-components";

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const Brushes = styled.img`
    height: 80%;
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
    box-shadow: 0px 2px 1px 1px rgb(0,0,0,.25);
    border-radius: 3rem;
`;

export const CursiveTitle = styled.h2`
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2.1rem;
    color: #14213D;
`;

export const CTAPara = styled.p`
    font-family: "Montserrat", serif;
    font-size: 1rem;
    text-align: center;
    color: #14213D;
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 1.5rem;
    background-color: #14213D;
    padding: 1rem 3rem;
    font-size: 1rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #EBEBEB;
    box-shadow: 0 0 15px 2px rgb(255, 240, 243, 0.25);
    
    &:hover {
        cursor: pointer;
        background-color:rgb(9, 36, 92);
    }
    &:active {
        box-shadow: inlet 5px 5px 5px black;
    }
`;


export const LpMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const LpLogoDx = styled.img`
    height: 36.5px;
`;

export const CursiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CursiveLogo = styled.img`
    height: 60px;
`;

export const ChangeIdiome = styled.div`
    display: flex;
    align-items: center;
    
    &:hover {
        cursor: pointer;
    }
`;

const Rotating = keyframes`

    0%{
        transform: rotate(0deg);
    }

    100%{
        transform: rotate(1800deg);
    }
`;

export const Globe = styled.img`
    width: 2rem;
    animation: ${Rotating} 300s linear;
`;
