import React from 'react'
import { CtgBackground } from '../StsCatalogue'
import { DxContainer, FixedMenu, InfoLangContainer, InfoMenu, /* GlobeContainer */ LogoName, MenuContainer, ParaTopMenu, PromoContainer, Promotions } from './StsCtgMenu'
import ActionsMenu from './actions/ActionsMenu'
import { Link } from 'react-router-dom'
/*import NavMenu from './navegation/NavMenu'*/
import SearchBar from './search/SearchBar'
import NavMenu from './navegation/NavMenu'
import { Globe } from '../../landingpage/Menu/StsMenu'
/* import { Globe } from '../../landingpage/Menu/StsMenu' */

const CtgMenu: React.FC = () => {
    return (
        <>
            <CtgBackground>
                <InfoMenu>
                    {/* TERMINAR DE PENSAR O QUE VIRÁ NESSE MENU DE FATO
                        AVALIAR A OPACIDADE DO MENU, TÁ NUMA OPACITY BOA OU MELHOR TROCAR?
                    */}
                    <InfoLangContainer>
                        <Globe
                            src='src/assets/landingpage/planet.png' alt='Planet Icon'
                            height={'1rem'}
                        />
                        <ParaTopMenu> Acessibilidade </ParaTopMenu>
                    </InfoLangContainer>
                    <InfoLangContainer>
                        <Globe
                            src='src/assets/landingpage/planet.png' alt='Planet Icon'
                            height={'1rem'}
                        />
                        <ParaTopMenu> Idioma </ParaTopMenu>
                    </InfoLangContainer>
                    <ParaTopMenu> Fale Conosco </ParaTopMenu>
                </InfoMenu>
                <MenuContainer>
                    <FixedMenu>
                        <DxContainer>
                            <Link to="/" className='logoName'>
                                <LogoName>DouxCreé</LogoName>
                            </Link>
                        </DxContainer>
                        <SearchBar />
                        {/*<NavMenu/>*/}
                        <ActionsMenu />
                    </FixedMenu>
                    <NavMenu />
                </MenuContainer>
                {/* Procurar imagens grandes e de boa qualidade para colocar como promoções em background
                        Será que vale a pena fazer uma promo personalizada com a logo da DouxCreé no Photoshop? Talvez.
                    */}
                <PromoContainer>
                    <Promotions src='src\assets\douxcreeimg.png' />
                </PromoContainer>
            </CtgBackground>
        </>
    )
}

export default CtgMenu
