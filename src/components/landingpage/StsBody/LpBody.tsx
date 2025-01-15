import { CTABtn, CTAPara, CursiveTitle, LpBodyContainer, LpCTAContainer } from './StsBody'

const LpBody = () => {

    return (
        <>
            <LpBodyContainer>
                <CursiveTitle>A beleza que nasce da delicadeza</CursiveTitle>
                <LpCTAContainer>
                    <CTAPara>Na DouxCrée, acreditamos que a beleza deve ser cuidada com delicadeza.
                        Nossos produtos são desenvolvidos com ingredientes naturais, em um processo
                        sustentável e com um toque da elegância francesa, para que você se sinta
                        bem por dentro e por fora.
                    </CTAPara>
                    <CTABtn>Descubra a delicadeza</CTABtn>
                </LpCTAContainer>
            </LpBodyContainer>
        </>
    )
}

export default LpBody