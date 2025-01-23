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
                        {/* Adicionar Link de retorno para LandinPage ao clicar na Logo
                            Considerar a adição de um efeito de carregamento na LandinPage.
                        */}
                        <LogoDx
                            src='src\assets\landingpage\DXLOGO.png'
                        />
                        <LogoName>DouxCreé</LogoName>
                    </DxContainer>
                    <NavBar>
                        {/*
                            Talvez: Alterar Home

                            Adicionar efeito de MouseUp e MouseDown na navbar para aparecer um componente
                            com a "lista de categorias" e produtos.
                        */}
                        <NavList>
                            <Navigation>Home</Navigation>
                            <Navigation>Produtos</Navigation>
                            <Navigation>Descubra seu tom</Navigation>
                            <Navigation>Fale conosco</Navigation>
                        </NavList>
                    </NavBar>
                    <ActionsMenu />
                </FixedMenu>
                {/* Procurar imagens grandes e de boa qualidade para colocar como promoções em background
                    Será que vale a pena fazer uma promo personalizada com a logo da DouxCreé no Photoshop? Talvez.
                */}
                <PromoContainer>
                    <Promotions src='src\assets\promo.jpg' />
                </PromoContainer>
            </CtgBackground>
        </>
    )
}

export default CtgMenu
