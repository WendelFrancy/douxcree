import styled from "styled-components";

export const LpBackground = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 25% 50% 25%;
    height: 100vh;
    padding: 0 20rem;
    overflow: hidden;
    background-image: url('src/assets/landingpage/texturebg.png');
    background-size: 100vh;
    @media (max-width: 1440px){
        padding: 0 4rem;
    }
`;

export const Brushes = styled.img`
    height: 80%;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const LpSectionBg = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 2.5rem;
    height: 15rem;
    max-width: 40rem;
    background-color: #EBEBEB;
    box-shadow: 0px 2px 1px 1px rgb(0,0,0,.25);
    border-radius: 3rem;
`;
