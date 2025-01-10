import { ChangeIdiome, CountryFlag, CursiveContainer, CursiveLogo, LpLogoDx, LpMenuContainer, LpBackground, SelectFlag } from './StsMenu/StsMenu'
import { CTABtn, CTAPara, CursivePara, PromoGlow, Promotions, PromoValue, LpBodyContainer, LpCTAContainer, PromoContainer } from './StsBody/StsBody'
import {  FooterContainer, FooterLogo, InfiniteScroll } from './StsFooter/StsFooter'

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
                <LpBodyContainer>
                    <CursivePara>A beleza que nasce da delicadeza</CursivePara>
                    <PromoContainer>
                        <PromoValue>Até 20% de desconto !</PromoValue>
                        <Promotions
                        src='src\assets\promotions.png'
                        />
                        <PromoGlow/>
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
                <FooterContainer>
                    <InfiniteScroll>
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\marimarialogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\brunatavareslogo.png'
                        />
                        <FooterLogo
                        src='src\assets\fran.png'
                        />
                        <FooterLogo
                        src='src\assets\lolalogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\marimarialogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\marimarialogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\brunatavareslogo.png'
                        />
                        <FooterLogo
                        src='src\assets\fran.png'
                        />
                        <FooterLogo
                        src='src\assets\lolalogo.png'
                        />
                    </InfiniteScroll>
                    <InfiniteScroll>
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\marimarialogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\brunatavareslogo.png'
                        />
                        <FooterLogo
                        src='src\assets\fran.png'
                        />
                        <FooterLogo
                        src='src\assets\lolalogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\marimarialogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\marimarialogo.png'
                        />
                        <FooterLogo
                        src='src\assets\kerastaselogo.png'
                        />
                        <FooterLogo
                        src='src\assets\brunatavareslogo.png'
                        />
                        <FooterLogo
                        src='src\assets\fran.png'
                        />
                        <FooterLogo
                        src='src\assets\lolalogo.png'
                        />
                    </InfiniteScroll>
                </FooterContainer>
            </LpBackground>
        </>
    )
}

export default LandingPg