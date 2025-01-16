import { BodyContainer, CursiveTitle } from '../StsBody/StsBody'
import { ChangeIdiome, CursiveContainer, CursiveLogo, LpLogoDx, LpMenuContainer, Globe, LpSectionBg } from './StsBody'
import { CTABtn, CTAPara, } from './StsBody'



const LpBody = () => {

    return (
        <>
            <BodyContainer>
                <LpSectionBg>
                    <LpMenuContainer>
                        <LpLogoDx
                            src='src\assets\DXLOGO.png'
                        />
                        <CursiveContainer>
                            <CursiveLogo
                                src='src\assets\logodx.png'
                            />
                        </CursiveContainer>
                        <ChangeIdiome>
                            <Globe
                                src='src\assets\planet_11527643.png'
                            />
                        </ChangeIdiome>
                    </LpMenuContainer>
                    <CursiveTitle>A beleza que nasce da delicadeza</CursiveTitle>
                </LpSectionBg>
                <LpSectionBg>
                    <CTAPara>
                        Na DouxCrée, acreditamos que a beleza deve ser cuidada com delicadeza.
                        Nossos produtos são desenvolvidos com ingredientes naturais, em um processo
                        sustentável e com um toque da elegância francesa, para que você se sinta
                        bem por dentro e por fora.
                    </CTAPara>
                    <CTABtn>Descubra a delicadeza</CTABtn>
                </LpSectionBg>
            </BodyContainer>
        </>
    )
}

export default LpBody