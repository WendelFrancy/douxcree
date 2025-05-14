
/* Trazer os estilos dos componentes Actions para a pasta actions, atualmente estão em StsCtgMenu */
import { EnterAction, CartAction, ActionsContainer } from "./StsActions"

const ActionsMenu = () => {
    return (
        <>
            <ActionsContainer>
                <EnterAction>
                    <img src='src\assets\login.png'></img>
                    <p> Entrar </p>
                </EnterAction>
                <CartAction> 
                    <img src="src\assets\cart.png" alt="" />
                </CartAction>
            </ActionsContainer>
        </>
    )
}

export default ActionsMenu