import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'NanumSquareRound', sans-serif;
    }
    ol, ul, li {
        list-style: none;
    }
    button{
        border:none;
    }
`;

export default GlobalStyles;
