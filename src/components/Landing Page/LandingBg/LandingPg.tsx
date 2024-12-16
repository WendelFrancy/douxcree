import { DouxCree, DouxTxtContainer, DxPara, DouxContainer, LandingImage, LPageContainer, LpImgContainer, BtnKnow } from './StsLandingPage'


const LandingPg = () => {

    return(
        <>
        <LPageContainer>
            <LpImgContainer>
                <LandingImage
                src='src\assets\make1.jpg'
                />
                <LandingImage
                src='src\assets\make1.jpg'
                />
                <LandingImage
                src='src\assets\make1.jpg'
                />
            </LpImgContainer>
            <DouxContainer>
                <DouxTxtContainer>
                    <DouxCree>DOUX<strong>CRÉE</strong></DouxCree>
                </DouxTxtContainer>
                    <DxPara>La beauté qui naît de la douceur</DxPara>
                    <BtnKnow>Découvrez</BtnKnow>
            </DouxContainer>
        </LPageContainer>
        </>
    )
}

export default LandingPg