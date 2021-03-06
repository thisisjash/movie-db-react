import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --maxwidth: 1280px;
        --white: #ffffff;
        --lightGrey: #eeeeee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5 rem;
        --fontBig: 1.5 rem;
        --fontMed: 1.2 rem;
        --fontSmall: 1 rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin : 0;
        padding : 0;

        h1 {
            font-size: 2 rem;
            font-weight: 600;
            color: var (--white);
        }

        h3 {
            font-size: 1.1 rem;
            font-weight: 600;
        }

        p {
            font-size: 1 rem;
            color: var (--white);
        }
    }

`;