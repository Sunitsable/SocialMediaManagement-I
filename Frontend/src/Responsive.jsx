import {css} from "styled-components";

export const mobile = (props) => {
    return css `
         @media only screen and (width: 375px){
            ${props}
        }
    `;
};

export const mobileL = (props) => {
    return css `
         @media only screen and (width: 425px){
            ${props}
        }
    `;
};

export const sharedMobileMandL = (props) => {
    return css `
         @media only screen and (min-width: 375px) and (max-width: 425px){
            ${props}
        }
    `;
};

export const laptop1024 = (props) => {
    return css `
         @media only screen and (max-width: 1024px){
            ${props}
        }
    `;
};

export const mobileS = (props) => {
    return css `
         @media only screen and (width: 320px){
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css `
         @media only screen and (width: 768px){
            ${props}
        }
    `;
};
