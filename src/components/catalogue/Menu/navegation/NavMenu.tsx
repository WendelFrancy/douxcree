import { NavBar, NavList, Navigation } from './StsNav'

const NavMenu = () => {
    return (
        <>
            <NavBar>
                {/*
                            Alterar Home

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
        </>
    )
}

export default NavMenu