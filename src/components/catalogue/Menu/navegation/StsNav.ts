import styled from 'styled-components'
import { navMotion } from '../KeyframesMenu';

export const NavBar = styled.nav`
    z-index: 1;
    position: relative;
    align-content: center;
    height: 100%;
    width: 100%;
    border-top: 1px solid rgb(0,0,0,.2);
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    height: 100%;
    color: #5B4430;
`;

export const Navigation = styled.li`
    display: grid;
    place-items: center;
    font-family: "Montserrat", serif;
    font-size: .9rem;
    font-weight: 500;
    height: 100%;
    .navpara{
        animation: ${navMotion} .1s ease-in-out;
        animation-fill-mode: forwards;
    }
`;

export const MenuOptionsContainer = styled.section`
    z-index: 0;
    position: absolute;
    left: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-self: center;
    height: 20rem;
    width: 100%;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgb(0,0,0,.25);
`;

export const MenuOptions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OptionsTitle = styled.h1`
    font-weight: 500;
`;




