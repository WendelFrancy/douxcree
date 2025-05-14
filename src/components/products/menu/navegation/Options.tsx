import React from "react";
import { MenuOptions, OptionsTitle } from "./StsNav"

type Opcoes = {
    optionTitle: string;
}

const Options: React.FC<Opcoes> = (props) =>  {

    const optionsMap: Record<string, JSX.Element> = {
        promocoes: (
            <>
            <OptionsTitle> Principais Promoções! </OptionsTitle>
            </>
        ),
        produtos: (
            <>
            <OptionsTitle> Bem-vindo a Produtos </OptionsTitle>
            </>
        ),
        rosto: (
            <>
            <OptionsTitle> Tudo para seu rosto! </OptionsTitle>
            </>
        ),
        descobrirtom: (
            <>
            <OptionsTitle> Descubra seu tom </OptionsTitle>
            </>
        ),
    }

    return(
        <>    
            <MenuOptions
            id={props.optionTitle} 
            >
                {optionsMap[props.optionTitle] || <h1> Em desenvolvimento </h1>}
            </MenuOptions>
        </>
    )
}

export default Options
