import { CTABtn, CTAPara } from './StsCTA'
import { LpSectionBg } from '../StsLpGlobal'
import { Link } from 'react-router-dom'

const CTA = () => {

    return (
        <> 
            <LpSectionBg>
                <CTAPara>
                    Na DouxCrée, acreditamos que a beleza deve ser cuidada com delicadeza.
                    Nossos produtos são desenvolvidos com ingredientes naturais, em um processo
                    sustentável e com um toque da elegância francesa, para que você se sinta
                    bem por dentro e por fora.
                </CTAPara>
                <Link to="/about"><CTABtn>Descubra a delicadeza</CTABtn></Link>
            </LpSectionBg>
        </>
    )
}

export default CTA