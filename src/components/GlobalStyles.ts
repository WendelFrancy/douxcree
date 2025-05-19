import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
    *{
        margin: 0; 
        padding: 0; 
        box-sizing: border-box;
    }
    body{
    height: 400vh;
    }


`;

export const LogoDx = styled.img`
    height: 35px;
    
`;


