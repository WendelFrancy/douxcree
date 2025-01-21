import { useEffect, useRef, useState } from 'react';
import { BigGlobe, BigGlobeBox, BigGlobeContainer, BigGlobeSvg, BodyContainer, CursiveTitle } from '../StsBody/StsBody'
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
                            <BigGlobeContainer>
                                <BigGlobeBox
                                ref={langRef} 
                                >
                                    <BigGlobeSvg
                                    viewBox='0 0 100 100'
                                    xmlns='src\assets\planetasvg.svg'
                                    >
                                        <BigGlobe>
                                            <circle 
                                            cx={40}
                                            cy={40}
                                            r={20}
                                            stroke='blue'
                                            />
                                            <circle 
                                            cx={60}
                                            cy={60}
                                            r={20}
                                            stroke='blue'
                                            />
                                        </BigGlobe>
                                    </BigGlobeSvg>
                                </BigGlobeBox>
                            </BigGlobeContainer>
                            )}
                            
                        </ChangeIdiome>
                    </LpMenuContainer>
                    <CursiveTitle>A beleza que nasce da delicadeza</CursiveTitle>
                </LpSectionBg>
                <LpSectionBg>
                    <CTAPara
                    txtColor= '#14123D'
                    txtSize='1rem'
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