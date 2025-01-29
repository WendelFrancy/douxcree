import React from "react";
import { MenuOptions, OptionsTitle } from "./StsNav"

type Opcoes = {
    optionTitle: string;
}

const Options: React.FC<Opcoes> = (props) =>  {

    const optionsMap: Record<string, JSX.Element> = {
        home: (
            <>
            <OptionsTitle>Bem vindo a Home</OptionsTitle>
            </>
        ),
        produtos: (
            <>
            <OptionsTitle>Bem vindo a Produtos</OptionsTitle>
            </>
        ),
    }

    return(
        <>    
            <MenuOptions
            id={props.optionTitle} //A informação chega aqui, mas como fazer isso alterar o restante dinamicamente?
            >
                {optionsMap[props.optionTitle] || <h1>Ainda não fiz</h1>}
            </MenuOptions>
        </>
    )
}

export default Options
