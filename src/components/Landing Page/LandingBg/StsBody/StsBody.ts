import {keyframes, styled} from "styled-components";


export const LpBodyContainer = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 1fr;
`;

const shining = keyframes`

    0%{
        left: 30%;
    }
    100%{
        left: 70%;
    }

`;

export const CursiveTitle = styled.h2`
    position: relative;
    font-family: "Parisienne", serif;
    font-weight: 400;
    font-size: 2.5rem;
    text-align: center;
    grid-column: span 2;
    padding-bottom: 3rem;

    &:before{

        display: none; /* Apagar */

        content: "";
        position: absolute;
        top: 0;
        left: 27%;
        width: 5px;
        height: 60%;
        background-color: white;
        animation: ${shining} 4s ease-in infinite; 
    }
`;

export const PromoContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    &:hover{
        div{
            animation-play-state: paused;
            box-shadow:  0px 0px 200px 55px #FFECEF;
            transition: all .5s ease-in-out;   
        }
    }
`;

export const PromoValue = styled.p`
    z-index: 2;
    font-size: 1.3rem;
`;

const glowing = keyframes`
    0%{
        opacity: .6;
    }
    50%{
        opacity: .8;
    }
    100%{
        opacity: .6;
    }
`;

export const PromoGlow = styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.6;
    border-radius: 80%;
    box-shadow:  0px 0px 200px 45px #FFECEF;
    animation: ${glowing} 2s linear infinite;
}
`;

export const Promotions = styled.img`
    z-index: 2;
    height: 13rem;
    &:hover{
        cursor: pointer;
        height: 13.06rem;
        transition: all 0.2s ease-in-out;
    }
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