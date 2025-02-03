import { useEffect, useRef, useState } from 'react';
import { ChangeIdiome, CursiveContainer, CursiveLogo, CursiveTitle, 
LpMenuContainer, Globe, BigGlobe, BigGlobeBox, BigGlobeContainer, Countrys } from './StsMenu'
import { LogoDx } from '../../GlobalStyles';
import { LpSectionBg } from '../StsLandingPage';


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
                    <LogoDx
                        src='src/assets/landingpage/dxlogoblack.png' alt='Douxcreé Logo'
                    />
                    <CursiveContainer>
                        <CursiveLogo
                            src='src/assets/landingpage/douxcreeblack.png' alt='Douxcreé Cursive Logo'
                        />
                    </CursiveContainer>
                    <ChangeIdiome>
                        <Globe
                            src='src/assets/landingpage/planetblack.png' alt='Planet Icon'
                            onClick={() => setChooseLang(true)}
                            height={''}
                        />
                        {chooseLang && (
                            <BigGlobeContainer>
                                <BigGlobeBox
                                    ref={langRef}
                                >
                                    <BigGlobe
                                        src='src\assets\landingpage\planetblack.png' alt='Planet Icon'
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
