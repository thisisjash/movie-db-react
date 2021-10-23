// Root Variables from the GlobalStyles.js are not being used...
// Check the Fault...

import styled from "styled-components";

export const Wrapper = styled.div `
    // background: var (--darkGrey);
    background: #1c1c1c;
    padding: 0 20px;
`;


export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    // max-width: var (--maxWidth);
    max-width: 1280px;
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img `
    width: 200px;
    
    @media screen and (max-width: 500 px) {
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img `
    width: 150px;
    
    @media screen and (max-width: 500 px) {
        width: 80px;
    }
`;