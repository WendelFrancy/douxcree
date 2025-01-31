import styled from "styled-components";
import { hoverBtn, changingMenu } from "./KeyframesMenu";

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
            .searchContainer, navBar{
                animation: ${changingMenu} .3s linear;
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

export const PromoContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Promotions = styled.img`
    height: 100vh;
`;



