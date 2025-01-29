import React, { useState } from 'react'
import { NavBar, NavList, Navigation, MenuOptionsContainer } from './StsNav'
import Options from './Options';

const NavMenu = () => {

    const [isMouseUp, setisMouseUp] = useState('');
    const mouseUp = (e: React.MouseEvent) => {
        const newBorder = e.currentTarget.id;
        if (newBorder) {
            setisMouseUp(newBorder)
        }
    }

    const [isHovered, setisHovered] = useState(false);
    const mouseEnter = () => {
        setisHovered(true);
    }
    const mouseLeaves = () => {
        setisHovered(false);
        setisMouseUp('');
    }

    const [optionsTitle, setOptionsTitle] = useState('default');
    const handleHover = (e: React.MouseEvent<HTMLElement>) => {
        const newTitle = e.currentTarget.id;
        if (newTitle) {
            setOptionsTitle(newTitle);

        } else {
            console.log('falhou')
        }
    };


    return (
        <>
            <NavBar
                onMouseLeave={() => mouseLeaves()}
            >
                <NavList>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='home'
                    >
                        <p className={isMouseUp === 'home' ? 'navpara' : ''}>
                            Home
                        </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='produtos'
                    >
                        <p className={isMouseUp == 'produtos' ? 'navpara' : ''}>
                            Produtos
                        </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='home2'
                    >
                        <p className={isMouseUp == 'home2' ? 'navpara' : ""}> Home </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='produtos2'
                    >
                        <p className={isMouseUp == 'produtos2' ? 'navpara' : ""}> Produtos </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='home5'
                    >
                        <p className={isMouseUp == 'home5' ? 'navpara' : ""}> Home </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='home6'
                    >
                        <p className={isMouseUp == 'home6' ? 'navpara' : ""}> Produtos </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='descobrirtom'
                    >
                        <p className={isMouseUp == 'descobrirtom' ? 'navpara' : ""}> Descubra seu tom </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); mouseUp(e) }}
                        id='faleconosco'
                    >
                        <p className={isMouseUp == 'faleconosco' ? 'navpara' : ""}> Fale conosco </p>
                    </Navigation>
                </NavList>
                {isHovered && (
                    <MenuOptionsContainer onMouseLeave={() => mouseLeaves()}>
                        <Options optionTitle={optionsTitle} />
                    </MenuOptionsContainer>
                )}
            </NavBar>
        </>
    )
}

export default NavMenu