import { Actions, ActionsContainer } from "../StsCtgMenu"

const ActionsMenu = () => {
    return (
        <>
            <ActionsContainer>
                <Actions><img src='src\assets\lupa.png'></img></Actions>
                <Actions><img src='src\assets\login.png'></img></Actions>
                <Actions><img src='src\assets\cart.png'></img></Actions>
            </ActionsContainer>
        </>
    )
}

export default ActionsMenu