import styled from "styled-components";
import { actionCartHover, actionEnterHover } from "../KeyframesMenu";

// AJUSTAR NO PHOTOSHOP O TAMANHO DAS IMAGENS DOS ACTIONS PARA UM TAMANHO FIXO!!

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const EnterAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    height: 80%;
    width: 7rem;
    border-radius: 1rem;
    img{ 
        height: 1.5rem;
    }
    p{
        font-size: .9rem;
    }
    &:hover{
        cursor: pointer;
        animation: ${actionEnterHover} .2s linear;
        animation-fill-mode: forwards;
    }
    
`;

export const CartAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 5rem;
    border-radius: 1rem;
    img{
        height: 1.5rem;
    }
    &:hover{
        cursor: pointer;
        animation: ${actionCartHover} .2s linear;
        animation-fill-mode: forwards;
    }
`;
