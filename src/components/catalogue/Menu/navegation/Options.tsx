import React from "react";
import { MenuOptions, OptionsTitle } from "./StsNav"

type Opcoes = {
    optionTitle: string;
}

const Options: React.FC<Opcoes> = (props) =>  {

    const optionsMap: Record<string, JSX.Element> = {
        home: (
            <>
            <OptionsTitle> Bem-vindo a Home </OptionsTitle>
            </>
        ),
        produtos: (
            <>
            <OptionsTitle> Bem-vindo a Produtos </OptionsTitle>
            </>
        ),
        faleconosco: (
            <>
            <OptionsTitle> Fale Conosco </OptionsTitle>
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
