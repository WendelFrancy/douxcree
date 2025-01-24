
/* Trazer os estilos dos componentes Actions para a pasta actions, atualmente estão em StsCtgMenu */
import { Actions, ActionsContainer } from "../StsCtgMenu"

const ActionsMenu = () => {
    return (
        <>
            <ActionsContainer>
                <Actions>
                    <img src='src\assets\login.png'></img>
                    <p> Entrar </p>
                </Actions>
                
                <Actions><img src='src\assets\cart.png'></img></Actions>
            </ActionsContainer>
        </>
    )
}

export default ActionsMenu