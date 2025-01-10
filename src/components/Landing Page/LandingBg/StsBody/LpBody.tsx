import { CTABtn, CTAPara, CursiveTitle, PromoGlow, Promotions, PromoValue, LpBodyContainer, LpCTAContainer, PromoContainer } from './StsBody'

const LpBody = () => {

    return (
        <>
            <LpBodyContainer>
                <CursiveTitle>A beleza que nasce da delicadeza</CursiveTitle>
                <PromoContainer>
                    <PromoValue>Até 20% de desconto !</PromoValue>
                    <Promotions
                        src='src\assets\promotions.png'
                    />
                    <PromoGlow />
                </PromoContainer>
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