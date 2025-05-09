import styled from "styled-components";
import { hoverBtn, changingMenu, navBar } from "./KeyframesMenu";

// AS ANIMAÇÕES DE HOVER NO MENU ESTÃO ÓTIMAS, MAS PARA UM MELHOR UI EU PRECISO DE ANIMAÇÕES
// REVERSAS TAMBÉM! AVALIAR MELHORES ALTERNATIVAS PARA "UNHOVER"/"ONMOUSELEAVE"

export const MenuContainer = styled.div`
    z-index: 999999;
    display: grid;
    grid-template-rows: 7rem 4rem;
    align-items: center;
    padding: 0 2rem;
    width: 100%;
    background-color:rgb(224, 222, 217);
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
    background-color: unset;
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





