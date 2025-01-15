import LpMenu from './StsMenu/LpMenu'
import LpBody from './StsBody/LpBody'
import styled from 'styled-components'


const LpBackground = styled.div`
    background-image: url('src/assets/texturebg.png');
`;

const LandingPg = () => {

    return (
        <>
            <LpBackground>
                <LpMenu />
                <LpBody />
            </LpBackground>
        </>
    )
}

export default LandingPg