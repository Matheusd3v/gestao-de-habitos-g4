import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 10px;
        margin:10px;
    }
    
    ::-webkit-scrollbar-track {
    
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        height: 30px;
        border-radius: 10px;
        background-color: #FF715B;
    }
    body {
        margin: 0;
        padding:0;
        background-color: #293241;   
             
    }

   
    
    ul{
        padding: 0px;
    }

   
    
`

export default GlobalStyle;