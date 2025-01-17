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
    max-width: 40rem;
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

type TxtProps = {
    txtColor: string;
    txtSize: string;
}

export const CTAPara = styled.p<TxtProps>`
    font-family: "Montserrat", serif;
    font-size: ${({txtSize}) => txtSize || '0.8rem'};
    text-align: center;
    color: ${({txtColor}) => txtColor || 'white'};
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 1.5rem;
    background-color: #14213D;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #EBEBEB;
    box-shadow: 0 0 15px 2px rgb(255, 240, 243, 0.25);
    
    &:hover {
        cursor: pointer;
        background-color:rgb(9, 36, 92);
        padding: 1rem 3rem;
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
        transform: rotate(360deg);
    }
`;

const RotateBigGlobe = keyframes`
    0%{
    
    }
    100%{
    
    }
`;

export const Globe = styled.img`
    height: 2rem;
    animation: ${Rotating} 60s linear infinite;
`;

export const BigGlobeContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    &:hover{
    cursor: default;
    }
`;

export const BigGlobeBox = styled.div`
    content: "";
    height: 20rem;
    width: 20rem;
    &:hover{
    cursor: pointer;
    }
`;

export const BigGlobe = styled.img`
    width: 100%;
    height: 100%;
`;

/*
export const LangContainer = styled.div`
    position: absolute;
    display: grid;
    grid-template-rows: 40%;
    top: -20px;
    left: 0px;
    width: 5rem;
    height: 6rem;
    background-color: #EBEBEB;
    box-shadow: 0 1px 1px 1px rgb(0,0,0,.25);
    border-radius: 0 0 5px 5px;
`;

export const SelectLangTitle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", serif;
    font-size: 0.8rem;
    height: 100%;
    background-color: #C59A82;
    color: white;
`;

export const SelectLangContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    padding: 5px 8px;

    &:hover{
        background-color:rgb(208, 207, 207);
    }
`;

export const Flag = styled.img`
    height: 13px;
    width: 17px;
`;

*/


