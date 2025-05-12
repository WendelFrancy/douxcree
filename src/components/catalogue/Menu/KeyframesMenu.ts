import { keyframes } from "styled-components";

type MenuFrames = {
    changing: Keyframe;
    hoverBtn: Keyframe;
    actionHover: Keyframe;
    navMotion: Keyframe;
    navBar: Keyframe;
}

export const changingMenu = keyframes<MenuFrames>`
    100%{
        background-color: white;  
    }
`;


export const hoverBtn = keyframes<MenuFrames>`
    0%{ 
        background-color: unset;
        width: 50%;
    }
    50%{
        border-radius: 1.4rem; 
    }
    100%{
        background-color: #EBD4C4;
        width: 100%;
        border-radius: .9rem;        
    }
`;

export const actionCartHover = keyframes<MenuFrames>`
    100%{
        background-color: #EBD4C4;
    }
`;

export const actionEnterHover = keyframes<MenuFrames>`
    100%{
        background-color: #EBD4C4;
    }
`;

export const navMotion = keyframes<MenuFrames>`
    100%{
        border-bottom: 2px solid rgb(221, 144, 183);
        padding-bottom: 3px;
    }
`;

export const navBar = keyframes<MenuFrames>`
    0%{
       border-top: 1px solid rgb(0,0,0,.2);
    }
    100%{
        border-top: 0.1px solid rgb(0,0,0,.0);
    }
`;