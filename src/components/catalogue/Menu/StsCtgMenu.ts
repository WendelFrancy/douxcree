import styled, { keyframes } from "styled-components";

type BgColorChange = {
    changing: Keyframe;
}

const changing = keyframes<BgColorChange>`
    0%{

    }
    100%{
        background-color: white;
    }
`;

export const FixedMenu = styled.menu`
    position: fixed;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    height: 8rem;
    width: 80%;
    padding: 0 4rem;
    margin: 0 10%;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 1px 2px 0 rgb(0,0,0,0.25);
    font-family: "Montserrat", serif;
    &:hover{
        animation: ${changing} .3s linear;
        animation-fill-mode: forwards;
    }
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

/*
export const GlobeContainer = styled.div`
    display: flex;
    padding: 40% 0;
`;
*/

export const NavBar = styled.nav`
    align-content: center;
    height: 100%;
    width: 100%;

`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
`;

export const Navigation = styled.li`
    font-size: 1rem;
    font-weight: 400;
`;

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

/*
export const ActionsBg = styled.div`
    display: grid;
    place-items: center;
    background-color: orange;
    border-radius: .5rem;
    height: 3rem;
    width: 3rem;
`;
*/

export const Actions = styled.div`
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    img{ 
        height: 1.5rem;
    }
    &:hover{
        cursor: pointer;
        background-color: orange;
        border-radius: .5rem;
    }
`;

export const PromoContainer = styled.div`
    overflow: hidden;
`;

export const Promotions = styled.img`
    height: 100vh;
    width: 100%;
`;



