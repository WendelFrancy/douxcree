import styled from 'styled-components'

export const SearchContainer = styled.form`
    align-self: center;
    display: grid;
    grid-template-columns: 80% 20%;
    padding: .15rem .15rem .15rem 1.5rem;
    background-color: rgb(194, 194, 194, .2);
    height: 3rem;
    width: 100%;
    border: 1px solid rgb(0,0,0,.3);
    border-radius: 1rem;
    @media screen and (max-width: 1440px){
        grid-template-columns: 85% 15%;
    }
`;

export const SearchInput = styled.input`
    align-self: center;
    text-align: start;
    font-family: "Montserrat", serif;
    height: 100%;
    font-weight: 500;
    font-size: .9rem;
    border: none;
    outline: none;
    background-color: unset;
    &::placeholder{
        color: black;
    }
`;

export const SearchBtn = styled.button`
    display: grid;
    place-items: center;
    align-self: center;
    height: 100%;
    margin: 0 auto;
    border: none;
    border-radius: .9rem;
    cursor: pointer;
    background-color: unset;
`;

export const Lens = styled.img`
    height: 1.3rem;
`;