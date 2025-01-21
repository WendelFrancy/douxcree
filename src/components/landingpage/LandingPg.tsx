import styled from 'styled-components'
import { BodyContainer, Brushes } from './CallToActionSection/StsCTA'
import CTA from './CallToActionSection/CTA';
import LpMenu from './Menu/LpMenu';


const LpBackground = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 25% 50% 25%;
    height: 100vh;
    padding: 0 20rem;
    overflow: hidden;
    background-image: url('src/assets/texturebg.png');
    background-size: 100vh;
    @media (max-width: 1440px){
        padding: 0 4rem;
    }
`;

const LandingPg = () => {

    return (
        <>
            <LpBackground>
                <Brushes
                    src='src\assets\brush1-melhorar.png'
                />
                <BodyContainer>
                    <LpMenu />
                    <CTA />
                </BodyContainer>
                <Brushes
                    src='src\assets\brush2-melhorar.png'
                />
            </LpBackground>
        </>
    )
}

export default LandingPg