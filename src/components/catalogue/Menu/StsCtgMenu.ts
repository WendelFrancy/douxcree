import styled, { keyframes } from "styled-components";

type MenuFrames = {
    changing: Keyframe;
    hoverBtn: Keyframe;
}

const changing = keyframes<MenuFrames>`
    100%{
        background-color: white;  
    }
`;

const hoverBtn = keyframes<MenuFrames>`
    0%{ 
        background-color: unset;
        width: 50%;
    }
    50%{
        border-radius: 1.4rem; 
    }
    100%{
        background-color: #fb8b24;
        width: 100%;
        border-radius: .9rem;        
    }
`;

/* Alterar a animação do Hover no Menu, para animação em JS com mouseup e mousedown*/

export const MenuContainer = styled.div`
    z-index: 999999;
    display: grid;
    grid-template-rows: 8rem 3rem;
    align-items: center;
    position: fixed;
    padding: 0 10%;
    width: 100%;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgb(0,0,0,0.25);
        &:hover{
            .btnSearch{
                animation: ${hoverBtn} .2s linear;
                animation-fill-mode: forwards;
            }  
            .searchContainer{
                animation: ${changing} .3s linear;
                animation-fill-mode: forwards;
            }
        }
`;

export const FixedMenu = styled.menu`
    position: relative;
    display: grid;
    grid-template-columns: 20% 50% 30%;
    margin: 0 10%;
    border-radius: 0 0 1rem 1rem;
    font-family: "Montserrat", serif;
`;

export const DxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    justify-content: center;
`;

export const LogoName = styled.p`
    font-size: 1rem;
    font-weight: 500;
`;

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 7rem;
    height: 3rem;
    img{ 
        height: 1.5rem;
    }
    &:hover{
        cursor: pointer;
        border-radius: .5rem;
    }
`;

export const PromoContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: #f7bf9a;
    margin-top: 11rem;
`;

export const Promotions = styled.img`
    height: 60vh;
`;



