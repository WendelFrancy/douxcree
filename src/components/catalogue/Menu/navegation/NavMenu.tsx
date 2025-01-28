import { useState } from 'react'
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

    return (
        <>
            <NavBar>
                {/*
                            Alterar Home

                            Adicionar efeito de MouseUp e MouseDown na navbar para aparecer um componente
                            com a "lista de categorias" e produtos.
                        */}
                <NavList>
                    <Navigation 
                    onMouseEnter={() => mouseEnter()}
                    > Home </Navigation>
                    <Navigation
                    
                    >Produtos</Navigation>
                    <Navigation>Home</Navigation>
                    <Navigation>Produtos</Navigation>
                    <Navigation>Home</Navigation>
                    <Navigation>Produtos</Navigation>
                    <Navigation>Descubra seu tom</Navigation>
                    <Navigation>Fale conosco</Navigation>
                </NavList>
                {isHovered && (
                <MenuOptionsContainer onMouseLeave={() => mouseLeaves()}>
                    <Options 
                    optionsTitle= {'teste'}
                    />
                </MenuOptionsContainer>
                )}
            </NavBar>
        </>
    )
}

export default NavMenu