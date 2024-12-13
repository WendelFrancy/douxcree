import { styled } from 'styled-components';

export const LPageContainer = styled.section`
    display: grid;
    grid-template-rows: 50% 50%;
    height: 100vh;
`;

export const LandingImage = styled.div`
    height: 100%;
    width: 100%;
`;


export const DouxContainer = styled.div`
    position: relative;
    border-radius: 50rem 50rem 0 0;
    width: 100%;
    height: 100%;
    background-color: #CA8787;
`; 

export const DouxTxtContainer = styled.div`
    position: absolute;
    top: 0;
    left: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DouxCree = styled.h1`
    font-family: "Playfair Display", serif;
    font-size: 6em;
    font-weight: 600;
    color: #F9F5F6;
        strong {
            font-family: "Lato", sans-serif;
        }
`;

export const DxPara = styled.p`
    font-family: "Merriweather", serif;
    font-size: 3em;
    font-weight: 600;
    color: #F9F5F6;
`;