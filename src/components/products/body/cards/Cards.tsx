import { BuyNow, Card, CardImage, CardImgContainer, CardInfos, CardInfosContainer, Parcelas, ProductsCardContainer } from "./StsCards"

const Cards = () => {
    return (
        <>

            <ProductsCardContainer>
                <Card>
                    <CardImgContainer>
                        <CardImage
                        className="cardImage"
                        src="src\assets\perf.jpg"
                        />
                    </CardImgContainer>
                    <CardInfosContainer>
                        <CardInfos> FRAN </CardInfos>
                        <CardInfos> Base Mate Real Filter B-01 </CardInfos>
                        <CardInfos> R$ 70,00 </CardInfos>
                        <Parcelas> 2x R$ 35,00 </Parcelas>
                    </CardInfosContainer>
                    <BuyNow className="buyNow"> Comprar </BuyNow>
                </Card>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ProductsCardContainer>
        </>
    )
}

export default Cards