import styled from 'styled-components'

export const NavBar = styled.nav`
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
`;

export const Navigation = styled.li`
    display: grid;
    place-items: center;
    font-family: "Montserrat", serif;
    font-size: .8rem;
    font-weight: 400;
    height: 2rem;
    width: 100%;
    border-radius: 1rem;
    &:hover{
        background-color:rgb(236, 236, 236);
    }
`;
