import { LpBackground } from './StsMenu/StsMenu'
import LpMenu from './StsMenu/LpMenu'
import LpBody from './StsBody/LpBody'
import LpFooter from './StsFooter/LpFooter'

const LandingPg = () => {

    return (
        <>
            <LpBackground>
                <LpMenu />
                <LpBody />
                <LpFooter />
            </LpBackground>
        </>
    )
}

export default LandingPg