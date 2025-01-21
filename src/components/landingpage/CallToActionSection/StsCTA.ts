import {styled} from "styled-components";

export const CursiveTitle = styled.h2`
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2.1rem;
    color: #14213D;
`;

type TxtProps = {
    txtColor: string;
    txtSize: string;
}

export const CTAPara = styled.p<TxtProps>`
    font-family: "Montserrat", serif;
    font-size: ${({txtSize}) => txtSize || '0.8rem'};
    text-align: center;
    color: ${({txtColor}) => txtColor || 'white'};
`;

export const CTABtn = styled.button`
    border: none;
    border-radius: 1.5rem;
    background-color: #14213D;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Montserrat", serif;
    font-weight: 500;
    color: #EBEBEB;
    box-shadow: 0 0 15px 2px rgb(255, 240, 243, 0.25);
    
    &:hover {
        cursor: pointer;
        background-color:rgb(9, 36, 92);
        padding: 1rem 3rem;
    }
`;






