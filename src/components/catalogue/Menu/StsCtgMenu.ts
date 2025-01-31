import styled, { keyframes } from "styled-components";

type MenuFrames = {
    changing: Keyframe;
    hoverBtn: Keyframe;
    actionHover: Keyframe;
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

const actionCartHover = keyframes<MenuFrames>`
    100%{
        background-color: orange;
    }
`;

const actionEnterHover = keyframes<MenuFrames>`
    100%{
        background-color: orange;
    }
`;

export const MenuContainer = styled.div`
    z-index: 999999;
    display: grid;
    grid-template-rows: 7rem 4rem;
    align-items: center;
    position: fixed;
    padding: 0 2rem;
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
    display: flex;
    justify-content: space-around;
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

export const PromoContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7bf9a;
    width: 100%;
    padding: 9rem 0 0 0;
`;

export const Promotions = styled.img`
    height: 60vh;
`;



