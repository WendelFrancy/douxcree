
import { useEffect, useRef, useState } from 'react';
import { BigGlobe, BigGlobeBox, BigGlobeContainer, Countrys } from './StsMenu'
import { ChangeIdiome, CursiveContainer, CursiveLogo, LpLogoDx, LpMenuContainer, Globe } from './StsMenu'
import { CursiveTitle, LpSectionBg } from '../CallToActionSection/StsCTA';


const LpMenu = () => {

    const [chooseLang, setChooseLang] = useState(false);
    const langRef = useRef<HTMLDivElement | null>(null);

    const clickOutside = (e: MouseEvent) => {
        if (langRef.current && !langRef.current.contains(e.target as Node)) {
            setChooseLang(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };

    }, []);

    return (
        <>
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
                                    <BigGlobe
                                        src='src\assets\planet_11527643.png'
                                    />
                                    <Countrys />
                                </BigGlobeBox>
                            </BigGlobeContainer>
                        )}
                    </ChangeIdiome>
                </LpMenuContainer>
                <CursiveTitle>A beleza que nasce da delicadeza</CursiveTitle>
            </LpSectionBg>
        </>
    )
}

export default LpMenu
