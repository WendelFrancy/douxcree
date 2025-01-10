import {keyframes, styled} from "styled-components";

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
    overflow: hidden;
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
    
const flagShine = keyframes`
    0%{
        left: 0%;
    }
    50%{
        opacity: .5;
    }
    100%{
        left: 85%;
    }
`;

export const FlagContainer = styled.div`
    position: relative;
    height: 21px;
        &:before{
        content: "";
        position: absolute;
        opacity: .2;
        top: 5%;
        left: 0%;
        width: 5px;
        height: 90%;
        background-color: white;
        box-shadow: 0px 0px 1px 1px white;
        animation: ${flagShine} 1s ease-in-out;
    } 
`;

export const CountryFlag = styled.img`
    height: 100%;
`;

export const SelectFlag = styled.p`
    font-size: 0.9rem;
`;