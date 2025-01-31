import styled from "styled-components";
import { hoverBtn, changingMenu, navBar } from "./KeyframesMenu";

// AS ANIMAÇÕES DE HOVER NO MENU ESTÃO ÓTIMAS, MAS PARA UM MELHOR UI EU PRECISO DE ANIMAÇÕES
// REVERSAS TAMBÉM! AVALIAR MELHORES ALTERNATIVAS PARA "UNHOVER"/"ONMOUSELEAVE"

export const InfoMenu = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(0,0,0,.7);
    width: 100%;
    height: 2rem;
    color: white;
    padding: 0 2rem;
    font-size: .8rem;
    font-family: "Montserrat", serif;
`;

export const InfoLangContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    &:hover{
        cursor: pointer;
    }
`;

export const ParaTopMenu = styled.p`
    font-weight: 500;
`;

export const MenuContainer = styled.div`
    z-index: 999999;
    display: grid;
    grid-template-rows: 7rem 4rem;
    align-items: center;
    position: fixed;
    padding: 0 2rem;
    width: 100%;
    background-color: unset;
    box-shadow: 0 1px 2px 0 rgb(0,0,0,0.25);
        &:hover{
            animation: ${changingMenu} .3s linear;
            animation-fill-mode: forwards;
            .btnSearch{
                animation: ${hoverBtn} .2s linear;
                animation-fill-mode: forwards;
            }  
            .searchContainer{
                animation: ${changingMenu} .1s linear;
                animation-fill-mode: forwards;
            }
            .navBar{
                animation: ${navBar} .2s linear;
                animation-fill-mode: forwards;
            }
        }
`;

export const FixedMenu = styled.menu`
    position: relative;
    display: flex;
    justify-content: center;
    font-family: "Montserrat", serif;
    gap: 4rem;
`;

export const DxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    .logoName{
        text-decoration: none;
        color: black;
    }
`;

export const LogoName = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
`;

export const PromoContainer = styled.div`
    height: 80vh;
    width: 100%;
`;

export const Promotions = styled.img`
    width: 100%;
`;



