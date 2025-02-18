import Cards from "./cards/Cards"
import Filters from "./filters/Filters"
import { FullBody, ProductContainer, PromoContainer, Promotions } from "./StsCtgBody"


const CtgBody = () => {
    return (
        <>
            {/* Procurar imagens grandes e de boa qualidade para colocar como promoções em background
                Será que vale a pena fazer uma promo personalizada com a logo da DouxCreé no Photoshop? Talvez.
            */}
            <FullBody>
                <PromoContainer>
                    <Promotions>
                        <p> Coloque aqui a sua promoção </p>
                        <p> Wendel, quando remover o texto, lembra de tirar também os font-styles </p>
                    </Promotions>
                </PromoContainer>
                <ProductContainer>
                    
                    <Filters />
                    <Cards />
                </ProductContainer>
            </FullBody>
        </>
    )
}

export default CtgBody