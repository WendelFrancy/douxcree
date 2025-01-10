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
        left: 30%;
    }
    50%{
        opacity: .2;
    }
    100%{
        left: 65%;
    }
`;

export const FlagContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    height: 21px;
        &:hover{
            &:before{
                content: "";
                position: absolute;
                opacity: .05;
                top: 5%;
                left: 30%;
                width: 5px;
                height: 90%;
                background-color: white;
                box-shadow: 0px 0px 5px 1px white;
                animation: ${flagShine} 1s ease-in-out infinite;
            }
        }
    } 
`;

export const CountryFlag = styled.img`
    height: 100%;
`;

export const SelectFlag = styled.p`
    font-size: 0.9rem;
`;