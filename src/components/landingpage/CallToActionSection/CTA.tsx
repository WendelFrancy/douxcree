import { CTABtn, CTAPara, LpSectionBg, } from './StsCTA'

const CTA = () => {

    return (
        <> 
            <LpSectionBg>
                <CTAPara
                    txtColor='#14123D'
                    txtSize='1rem'
                >
                    Na DouxCrée, acreditamos que a beleza deve ser cuidada com delicadeza.
                    Nossos produtos são desenvolvidos com ingredientes naturais, em um processo
                    sustentável e com um toque da elegância francesa, para que você se sinta
                    bem por dentro e por fora.
                </CTAPara>
                <CTABtn>Descubra a delicadeza</CTABtn>
            </LpSectionBg>
        </>
    )
}

export default CTA