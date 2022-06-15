import { keyframes } from "styled-components/macro";

export const DropdownAnimationMin = keyframes`
    0% {width: 0; height: 0};
    50% {width: 0; height: 30px};
    100% {width: calc(100% + 50px);}
`;

export const DropdownAnimationMinHide = keyframes`
    0% {width: 0; height: 0};
    50% {width: 0;};
    100% {width: calc(100% + 50px);}
`;

export const DropdownAnimationMax = keyframes`
    0% {transform: translateY(20px); opacity: 0;}
    100% {transform: translateY(0); opacity: 1;}
`;
