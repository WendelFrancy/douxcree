import styled from 'styled-components'

export const SearchContainer = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: 80% 20%;
    place-items: center;
    padding: .15rem .15rem .15rem 1.5rem;
    background-color: rgb(194, 194, 194, .3);
    height: 4rem;
    width: 100%;
    border: 1px solid rgb(0,0,0,.3);
    border-radius: 1rem;
`;

export const SearchLabel = styled.p`
    font-family: "Montserrat", serif;
    font-weight: 500;
    font-size: 1rem;
`;

export const SearchBtn = styled.button`
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: .9rem;
    cursor: pointer;
    background-color: unset;
`;

export const Lens = styled.img`
    height: 1.5rem;
`;