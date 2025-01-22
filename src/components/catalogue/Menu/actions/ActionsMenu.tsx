import { Actions, ActionsContainer } from "../StsCtgMenu"

const ActionsMenu = () => {
    return (
        <>
            <ActionsContainer>
                <Actions
                    src='src\assets\lupa.png'
                ></Actions>
                <Actions
                    src='src\assets\login.png'
                ></Actions>
                <Actions
                    src='src\assets\cart.png'
                ></Actions>
            </ActionsContainer>
        </>
    )
}

export default ActionsMenu