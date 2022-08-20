import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background: #F5F5F5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
;