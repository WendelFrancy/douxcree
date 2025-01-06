import { ChangeIdiome, CountryFlag, CursiveContainer, CursiveLogo, CursivePara, LpBackground, LpLogoDx, LpMenuContainer, SeasonalBase, SelectFlag } from './StsLandingPage'


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
                <SeasonalBase
                src='src\assets\FloatingBase.png'
                />
            </LpBackground>
        </>
    )
}

export default LandingPg