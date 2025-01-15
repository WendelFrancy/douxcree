import {styled} from "styled-components";


export const LpBodyContainer = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 1fr;
`;

export const CursiveTitle = styled.h2`
    position: relative;
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
    grid-column: span 2;
    padding-bottom: 3rem;
`;

export const LpCTAContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
`;

export const CTAPara = styled.p`
    font-size: 1rem;
    text-align: center;
    width: 23rem;
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 5rem;
    background-color: #FFF0F3;
    font-size: 1rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #590D22;
    box-shadow: 0 0 15px 2px rgb(255, 240, 243, 0.25);
    height: 3.5rem;
    width: 18rem;

    &:hover {
        cursor: pointer;
        background-color:rgb(252, 226, 232);
    }
    &:active {
        box-shadow: inlet 5px 5px 5px black;
    }
`;