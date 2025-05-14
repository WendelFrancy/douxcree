import React from 'react'
import { CtgBackground } from '../StsCatalogue'
import { DxContainer, FixedMenu, LogoName, MenuContainer } from './StsCtgMenu'
import ActionsMenu from './actions/ActionsMenu'
import { Link } from 'react-router-dom'
import SearchBar from './search/SearchBar'
import NavMenu from './navegation/NavMenu'

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
            </CtgBackground>
        </>
    )
}

export default CtgMenu
