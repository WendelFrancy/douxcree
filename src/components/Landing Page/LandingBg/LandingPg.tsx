import { ChangeIdiome, CountryFlag, CursiveContainer, CursiveLogo, 
         CursivePara, LpBackground, LpBodyContainer, LpLogoDx, LpMenuContainer, Promotions, SelectFlag } from './StsLandingPage'


const LandingPg = () => {

    return (
        <>
            <LpBackground>
                <LpMenuContainer>
                    <LpLogoDx
                        src='src\assets\DXLOGOWHITE.png'
                    />
                    <CursiveContainer>
                        <CursiveLogo
                            src='src\assets\douxcree.png'
                        />
                    </CursiveContainer>
                    <ChangeIdiome>
                        <CountryFlag
                        src='src\assets\brflag.png'
                        />
                        <SelectFlag>Selecione</SelectFlag>
                    </ChangeIdiome>
                </LpMenuContainer>
                <CursivePara>A beleza que nasce da delicadeza</CursivePara>
                <LpBodyContainer>
                    <Promotions
                    src='src\assets\promotions.png'
                    />
                </LpBodyContainer>
            </LpBackground>
        </>
    )
}

export default LandingPg