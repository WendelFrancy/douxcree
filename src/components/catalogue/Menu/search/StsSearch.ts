import styled from 'styled-components'

export const SearchContainer = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: 80% 20%;
    place-items: center;
    padding: .5rem 1.5rem;
    background-color: rgb(0,0,0,.4);
    height: 4rem;
    width: 100%;
    border: 1px solid rgb(100,100,100,.5);
    border-radius: 1rem;
`;

export const SearchLabel = styled.p`
    font-family: "Montserrat", serif;
    font-weight: 500;
    font-size: 1rem;
`;

export const SearchBtn = styled.button`
    display: flex:
    align-items: center;
    height: 80%;
    width: 100%;
    border: none;
    border-radius: 1rem;
    background-color: orange;
    cursor: pointer;
`;

export const Lens = styled.img`
    height: 1.5rem;
`;