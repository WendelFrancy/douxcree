import styled from 'styled-components'

export const SearchContainer = styled.form`
    align-self: center;
    display: grid;
    grid-template-columns: 80% 10%;
    padding: .15rem .15rem .15rem 1.5rem;
    background-color: rgb(194, 194, 194, .2);
    height: 4rem;
    width: 100%;
    border: 1px solid rgb(0,0,0,.3);
    border-radius: 1rem;
    @media screen and (min-width: 1440px){
        grid-template-columns: 85% 15%;
    }
`;

export const SearchInput = styled.input`
    align-self: center;
    text-align: start;
    font-family: "Montserrat", serif;
    height: 100%;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: unset;
    &::placeholder{
        color: black;
    }
`;

export const SearchBtn = styled.button`
    align-self: center;
    height: 100%;
    margin: 0 auto;
    border: none;
    border-radius: .9rem;
    cursor: pointer;
    background-color: unset;
`;

export const Lens = styled.img`
    height: 1.5rem;
`;