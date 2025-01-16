import { useEffect, useRef, useState } from 'react';
import { BodyContainer, CursiveTitle, Flag, LangContainer, SelectLangContainer, SelectLangTitle } from '../StsBody/StsBody'
import { ChangeIdiome, CursiveContainer, CursiveLogo, LpLogoDx, LpMenuContainer, Globe, LpSectionBg } from './StsBody'
import { CTABtn, CTAPara, } from './StsBody'


const LpBody = () => {

    const [chooseLang, setChooseLang] = useState(false);
    const langRef = useRef<HTMLDivElement | null>(null);
  
    const clickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)){
        setChooseLang(false);
      }  
    };
  
    useEffect(() => {
      document.addEventListener("mousedown",clickOutside);
      return () => {
        document.removeEventListener("mousedown", clickOutside);
      };
  
    }, []);
  
    function escolheuLang (lingua: string) {
        alert(`Você escolheu ${lingua}`)
    }

    return (
        <>
            <BodyContainer>
                <LpSectionBg>
                    <LpMenuContainer>
                        <LpLogoDx
                            src='src\assets\DXLOGO.png'
                        />
                        <CursiveContainer>
                            <CursiveLogo
                                src='src\assets\logodx.png'
                            />
                        </CursiveContainer>
                        <ChangeIdiome>
                            <Globe
                                src='src\assets\planet_11527643.png'
                                onClick={() => setChooseLang(true)}
                            />
                            {chooseLang && ( 
                                <LangContainer
                                ref={langRef}
                                > 
                                    <SelectLangTitle>
                                        Selecione
                                    </SelectLangTitle>
                                    <SelectLangContainer
                                    onClick= {() => escolheuLang('Francês')}
                                    >
                                        <Flag
                                        src='src\assets\frflag.png'
                                        />
                                        <CTAPara
                                        txtColor='#14123D'
                                        >FR</CTAPara>
                                    </SelectLangContainer>
                                    <SelectLangContainer
                                    onClick={() => escolheuLang('Inglês')}
                                    >
                                        <Flag
                                        src='src\assets\engflag.png'
                                        />
                                        <CTAPara
                                        txtColor='#14123D'
                                        >ENG</CTAPara>
                                    </SelectLangContainer>
                                </LangContainer>
                                )}
                        </ChangeIdiome>
                    </LpMenuContainer>
                    <CursiveTitle>A beleza que nasce da delicadeza</CursiveTitle>
                </LpSectionBg>
                <LpSectionBg>
                    <CTAPara
                    txtColor= '#14123D'
                    >
                        Na DouxCrée, acreditamos que a beleza deve ser cuidada com delicadeza.
                        Nossos produtos são desenvolvidos com ingredientes naturais, em um processo
                        sustentável e com um toque da elegância francesa, para que você se sinta
                        bem por dentro e por fora.
                    </CTAPara>
                    <CTABtn>Descubra a delicadeza</CTABtn>
                </LpSectionBg>
            </BodyContainer>
        </>
    )
}

export default LpBody