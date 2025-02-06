import React from 'react'
import { CtgBackground } from '../StsCatalogue'
import { DxContainer, FixedMenu, LogoName, MenuContainer, PromoContainer, Promotions } from './StsCtgMenu'
import ActionsMenu from './actions/ActionsMenu'
import { Link } from 'react-router-dom'
import SearchBar from './search/SearchBar'
import NavMenu from './navegation/NavMenu'
import TesteDeScroll from '../Body/teste/TesteDeScroll'

const CtgMenu: React.FC = () => {
    return (
        <>
            <CtgBackground>
                <MenuContainer>
                    <FixedMenu>
                        <DxContainer>
                            <Link to="/" className='logoName'>
                                <LogoName>DouxCreé</LogoName>
                            </Link>
                        </DxContainer>
                        <SearchBar />
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

                <TesteDeScroll />
            </CtgBackground>
        </>
    )
}

export default CtgMenu
