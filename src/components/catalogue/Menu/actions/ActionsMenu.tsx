
/* Trazer os estilos dos componentes Actions para a pasta actions, atualmente estão em StsCtgMenu */
import { Actions, ActionsContainer } from "../StsCtgMenu"

const ActionsMenu = () => {
    return (
        <>
            <ActionsContainer>
                <Actions><img src='src\assets\login.png'></img></Actions>
                <p> Entrar </p>
                <Actions><img src='src\assets\cart.png'></img></Actions>
            </ActionsContainer>
        </>
    )
}

export default ActionsMenu