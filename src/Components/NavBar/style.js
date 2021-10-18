import styled from 'styled-components'

export const HeaderBar =  styled.header`
    width: 100%;
    height: 70px;
    background: #3D5A80;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 40px;
    box-sizing: border-box;
    box-shadow: 0px 7px 21px -4px rgba(0,0,0,0.53);

    button {
        display: none;
    }

    button {
        background: transparent;
        border: none;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
        border: 1px solid #FFFFFF;
        padding: 5px 10px;
        border-radius: 5px;
    }

   @media screen and (max-width: 800px) {
       .notShowMob {
           display: none;
       }

       button {
            display: flex;
            align-items: center;
            height: 60%;
       }
   }
`

export const NameContainer = styled.div`
    margin-right: 15%;

    h1 {
        margin: 0;
        color: #FFFFFF;
    }

    @media (max-width: 915px) {
        width: 250px;
        margin-right: 5%;
    }

    @media (max-width: 820px) {
        margin: 0 auto;
    }

`