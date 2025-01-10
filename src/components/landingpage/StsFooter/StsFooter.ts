import { keyframes, styled } from "styled-components";

const anmInfiniteScroll = keyframes`
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-103%);
    }
`;

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 5rem;
    width: 100%;
    background-color: #FFECEF;
`;


/*
    IMG width need to be the same (todo on Photoshop)
*/
export const InfiniteScroll = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    animation: ${anmInfiniteScroll} 90s linear infinite;
`;

export const FooterLogo = styled.img`
    height: 3rem;
    width: 5rem;
`;