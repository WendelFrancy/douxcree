import React, { useState } from 'react'
import { NavBar, NavList, Navigation, MenuOptionsContainer } from './StsNav'
import Options from './Options';

const NavMenu = () => {

    /* Função para expandir o menu quando estiver em hover */
    const [isHovered, setisHovered] = useState(false);
    const mouseEnter = () => {
        setisHovered(true);
    }
    const mouseLeaves = () => {
        setisHovered(false);
    }


    /* ele chama o default, mas não altera o estado ao passarmos o mouse */
    const [optionsTitle, setOptionsTitle] = useState('default');
    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const newTitle = e.currentTarget.id; 
        if (newTitle) {
            setOptionsTitle(newTitle); 
            console.log('novo titulo')
        }else {

            console.log('falhou')
        }
    };    


    return (
        <>
            <NavBar>
                <NavList>
                    <Navigation 
                    onMouseEnter={() => {mouseEnter(), handleHover}}
                    id='home1'
                    > Home </Navigation>
                    <Navigation
                    onMouseEnter={() => {mouseEnter(), handleHover}}
                    id='home2'
                    >Produtos</Navigation>
                    <Navigation
                    onMouseEnter={() => {mouseEnter(), handleHover}}
                    data-title='home3'
                    >Home</Navigation>
                    <Navigation
                    onMouseEnter={() => {mouseEnter(), handleHover}}
                    data-title='home4'
                    >Produtos</Navigation>
                    <Navigation
                    onMouseEnter={() => mouseEnter()}
                    data-title='home5'
                    >Home</Navigation>
                    <Navigation
                    onMouseEnter={() => mouseEnter()}
                    data-tile='home6'
                    >Produtos</Navigation>
                    <Navigation
                    onMouseEnter={() => mouseEnter()}
                    data-title='home7'
                    >Descubra seu tom</Navigation>
                    <Navigation
                    onMouseEnter={() => mouseEnter()}
                    data-title='home8'
                    >Fale conosco</Navigation>
                </NavList>
                {isHovered && (
                <MenuOptionsContainer onMouseLeave={() => mouseLeaves()}>
                    <Options 
                    optionTitle= {optionsTitle}
                    />
                </MenuOptionsContainer>
                )}
            </NavBar>
        </>
    )
}

export default NavMenu