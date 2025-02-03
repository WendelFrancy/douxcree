import styled, { keyframes } from 'styled-components'

const scrolling = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg)
    }
`;

const BoxToAnimate = styled.div`
    height: 10rem;
    width: 10rem;
    background-color: black;

    animation-name: ${scrolling};
    animation-duration: 1s;
    animation-direction: linear;
    animation-timeline: scroll(nearest block);
`;

const TesteDeScroll = () => {
    return(
        <>
            <BoxToAnimate/>
        </>
    )
}

export default TesteDeScroll