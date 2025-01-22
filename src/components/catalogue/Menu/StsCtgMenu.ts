import styled from "styled-components";

export const FixedMenu = styled.menu`
    position: fixed;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    height: 8rem;
    width: 80%;
    padding: 0 4rem;
    margin: 0 10%;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 1px 2px 0 rgb(0,0,0,0.25);
    font-family: "Montserrat", serif;
    &:hover{
        background-color: white;
    }
`;

export const DxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

export const Actions = styled.img`
    height: 1.5rem;
    &:hover{
        cursor: pointer;
    }
`;

export const PromoContainer = styled.div`
    overflow: hidden;
`;

export const Promotions = styled.img`
    height: 100vh;
    width: 100%;
`;



