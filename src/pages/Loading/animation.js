import { keyframes } from "styled-components";

export const LoadingAnimation = keyframes`
    0% {opacity: 0.6;}
    25% {opacity: 1;}
    50% {opacity: 0.6;}
    75% {opacity: 1;}
    100% { opacity: 0.6;}
`;

export const LoadingBarAnimation = keyframes`
    0% {left: 49%; right: 49%;}
    25% {left: 49%; right: 1%;}
    50% {left: 99%; right: 1%;}
    75% {left: 49%; right: 1%;}
    100% {left: 49%; right: 49%;}
`;
