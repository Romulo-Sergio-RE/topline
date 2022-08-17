import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background: #FFFFFFFF;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
;