import React from "react";
import { MenuOptions, OptionsTitle } from "./StsNav"

type Opcoes = {
    optionsTitle: string | JSX.Element;
}

const Options: React.FC<Opcoes> = (props) =>  {

    return(
        <>    
            <MenuOptions>
                <OptionsTitle>{props.optionsTitle}</OptionsTitle>
            </MenuOptions>
        </>
    )
}

export default Options
