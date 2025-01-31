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
        background-color: #fb8b24;
        width: 100%;
        border-radius: .9rem;        
    }
`;

export const actionCartHover = keyframes<MenuFrames>`
    100%{
        background-color:rgba(255, 168, 110, 0.3);
    }
`;

export const actionEnterHover = keyframes<MenuFrames>`
    100%{
        background-color: rgba(255, 168, 110, 0.3);
    }
`;

export const navMotion = keyframes<MenuFrames>`
    100%{
        border-bottom: 2px solid #fb8b24;
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