import LpBody from '../landingpage/StsBody/LpBody'
import styled from 'styled-components'
import { Brushes } from '../landingpage/StsBody/StsBody';


const LpBackground = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 25% 50% 25%;
    height: 100vh;
    padding: 0 4rem;
    overflow: hidden;
    background-image: url('src/assets/texturebg.png');
    background-size: 100vh;
`;

const LandingPg = () => {

    return (
        <>
            <LpBackground>
                <Brushes
                src='src\assets\brush1-melhorar.png'
                />
                <LpBody />
                <Brushes
                src='src\assets\brush2-melhorar.png'
                />
            </LpBackground>
        </>
    )
}

export default LandingPg