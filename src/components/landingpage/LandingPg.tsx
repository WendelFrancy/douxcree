import { BodyContainer, Brushes, LpBackground } from './StsLpGlobal'
import CTA from './CallToActionSection/CTA';
import LpMenu from './Menu/LpMenu';


const LandingPg = () => {

    return (
        <>
            <LpBackground>
                <Brushes
                    src='src/assets/landingpage/brush1-melhorar.png' alt='Right Brushes at Background'
                />
                <BodyContainer>
                    <LpMenu />
                    <CTA />
                </BodyContainer>
                <Brushes
                    src='src/assets/landingpage/brush2-melhorar.png' alt='Left Brushes at Background'
                />
            </LpBackground>
        </>
    )
}

export default LandingPg