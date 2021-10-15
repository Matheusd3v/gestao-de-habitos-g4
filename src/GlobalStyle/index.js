import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding:0;
        background-color: #293241;
    }

    .MuiMenu-root {
        margin-top: 30px;
        display: flex;
    }

    .MuiMenu-list {
        background: #3D5A80;
        color: #FFFF;
        height: 500px;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            height: 100%;
        }
    }

    .MuiMenu-paper {
        width: 90%;
        height: 500px;
    }

    .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 25px;
        font-weight: bolder;
    }
`

export default GlobalStyle;