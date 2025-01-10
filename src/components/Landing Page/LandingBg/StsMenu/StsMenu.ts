import styled from "styled-components";

export const LpBackground = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #590D22;
    padding-top: 50px;
    height: 100vh;
    font-family: "Montserrat", serif;
    font-weight: 400;
    color: #FFFFFF;
    overflow: hidden;
`;

export const LpMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

export const LpLogoDx = styled.img`
    width: 47px;
    height: 50px;
`;

export const CursiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CursiveLogo = styled.img`
    width: 208px;
    height: 80px;
`;


export const ChangeIdiome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    &:hover {
        cursor: pointer;
    }
`;
    
export const CountryFlag = styled.img`
    height: 23px;
    width: 32px;
`;

export const SelectFlag = styled.p`
    font-size: 0.9rem;
`;