import React from 'react'
import { CtgBackground } from '../StsCatalogue'
import { DxContainer, FixedMenu, /* GlobeContainer */ LogoName, PromoContainer, Promotions } from './StsCtgMenu'
import { LogoDx } from '../../GlobalStyles'
import ActionsMenu from './actions/ActionsMenu'
import { Link } from 'react-router-dom'
/*import NavMenu from './navegation/NavMenu'*/
import SearchBar from './search/SearchBar'
/* import { Globe } from '../../landingpage/Menu/StsMenu' */

const CtgMenu: React.FC = () => {
    return (
        <>
            <CtgBackground>
                <FixedMenu>
                    <DxContainer>
                        <Link to="/">
                            <LogoDx
                                src='src\assets\landingpage\DXLOGO.png'
                            />
                        </Link>
                            <LogoName>DouxCreé</LogoName>
                    </DxContainer>
                    <SearchBar/>
                    {/*<NavMenu/>*/}
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
