
import { useEffect, useRef, useState } from 'react';
import { ChangeIdiome, CursiveContainer, CursiveLogo, CursiveTitle, LpLogoDx,
LpMenuContainer, Globe, BigGlobe, BigGlobeBox, BigGlobeContainer, Countrys } from './StsMenu'
import { LpSectionBg } from '../StsLpGlobal';


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
                        src='src/assets/landingpage/DXLOGO.png' alt='Douxcreé Logo'
                    />
                    <CursiveContainer>
                        <CursiveLogo
                            src='src/assets/landingpage/logodx.png' alt='Douxcreé Cursive Logo'
                        />
                    </CursiveContainer>
                    <ChangeIdiome>
                        <Globe
                            src='src/assets/landingpage/planet.png' alt='Planet Icon'
                            onClick={() => setChooseLang(true)}
                        />
                        {chooseLang && (
                            <BigGlobeContainer>
                                <BigGlobeBox
                                    ref={langRef}
                                >
                                    <BigGlobe
                                        src='src/assets/landingpage/planet.png' alt='Planet Icon'
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
