import React from "react";
import { MenuOptions, OptionsTitle } from "./StsNav"

type Opcoes = {
    optionTitle: string | JSX.Element | boolean;
}

const Options: React.FC<Opcoes> = (props) =>  {

    return(
        <>    
            <MenuOptions>
                <OptionsTitle>{props.optionTitle}</OptionsTitle>
            </MenuOptions>
        </>
    )
}

export default Options
