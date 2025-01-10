import { ChangeIdiome, CountryFlag, CursiveContainer, CursiveLogo, LpLogoDx, LpMenuContainer, SelectFlag, FlagContainer } from './StsMenu'


const LpMenu = () => {

    return (
        <>
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
                    <FlagContainer>
                        <CountryFlag
                            src='src\assets\brflag.png'
                        />
                        <SelectFlag>Selecione</SelectFlag>
                    </FlagContainer>
                </ChangeIdiome>
            </LpMenuContainer>
        </>
    )
}

export default LpMenu