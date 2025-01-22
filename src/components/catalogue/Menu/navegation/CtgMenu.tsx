import React from 'react'
import { CtgBackground } from '../../StsCatalogue'
import { DxContainer, FixedMenu, /* GlobeContainer */ LogoName, NavBar, Navigation, NavList, PromoContainer, Promotions } from '../StsCtgMenu'
import { LogoDx } from '../../../GlobalStyles'
import ActionsMenu from '../actions/ActionsMenu'
/* import { Globe } from '../../landingpage/Menu/StsMenu' */

const CtgMenu: React.FC = () => {
    return (
        <>
            <CtgBackground>
                <FixedMenu>
                    <DxContainer>
                        <LogoDx
                            src='src\assets\landingpage\DXLOGO.png'
                        />
                        <LogoName>DouxCreé</LogoName>
                    </DxContainer>
                    {/*<GlobeContainer>
                        <Globe
                        src='src\assets\landingpage\planet.png'
                        />
                    </GlobeContainer>*/}
                    <NavBar>
                        <NavList>
                            <Navigation>Home</Navigation>
                            <Navigation>Produtos</Navigation>
                            <Navigation>Descubra seu tom</Navigation>
                            <Navigation>Fale conosco</Navigation>
                        </NavList>
                    </NavBar>
                    <ActionsMenu />
                </FixedMenu>
                <PromoContainer>
                    <Promotions src='src\assets\promo.jpg' />
                </PromoContainer>
            </CtgBackground>
        </>
    )
}

export default CtgMenu
