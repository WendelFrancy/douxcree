import React, { useState } from 'react'
import { NavBar, NavList, Navigation, MenuOptionsContainer } from './StsNav'
import Options from './Options';

const NavMenu = () => {

    /* Função para expandir o menu quando estiver em hover */
    const [isHovered, setisHovered] = useState(false);
    const mouseEnter = () => {
        setisHovered(true);
        const menuParag = document.querySelectorAll('navpara');
        if (isHovered) {
            (menuParag[1] as HTMLElement).style.borderBottomColor = 'blue'
        }
    }
    const mouseLeaves = () => {
        setisHovered(false);
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
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='home'
                    >
                        <p className='navpara'>Home</p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='produtos'
                    >
                        <p className='navpara'>Produtos</p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='home2'
                    >
                        <p className='navpara'> Home </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='produtos2'
                    >
                        <p className='navpara'> Produtos </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='home5'
                    >
                        <p className='navpara'> Home </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='home6'
                    >
                        <p className='navpara'> Produtos </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='home7'
                    >
                        <p className='navpara'> Descubra seu tom </p>
                    </Navigation>
                    <Navigation
                        onMouseEnter={(e) => { mouseEnter(); handleHover(e); }}
                        id='home8'
                    >
                        <p className='navpara'> Fale conosco </p>
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