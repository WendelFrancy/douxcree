import { styled } from 'styled-components';

export const LPageContainer = styled.section`
    display: grid;
    grid-template-rows: 50% 50%;
    height: 100vh;
`;

export const LpImgContainer = styled.div`
    display: flex;
`;

export const LandingImage = styled.img`
    position: relative;
    opacity: 0.8;
    height: 100%;
    width: 100%;
`;


export const DouxContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    background-color: #803D3B;
`; 

export const DouxTxtContainer = styled.div`
    position: absolute;
    top: -100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DouxCree = styled.h1`
    font-family: "Playfair Display", serif;
    font-size: 17rem;
    font-weight: 600;
    color: #FFEFEF;
        strong {
            font-family: "Lato", sans-serif;
        }
`;

export const DxPara = styled.p`
    font-family: "Merriweather", serif;
    font-size: 3em;
    font-weight: 600;
    color: #F9F5F6;
    text-align: center;
`;

export const BtnKnow = styled.button`
    font-family: "Lato", sans-serif;
    font-size: 1.3em;
    font-weight: 600;
    color: #803D3B;
    border: none;
    border-radius: 4rem;
    background-color: #F9F5F6;
    height: 4rem;
    width: 15rem;
`;