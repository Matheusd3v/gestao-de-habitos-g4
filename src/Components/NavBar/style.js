import { AppBar, Button, MenuList, Toolbar } from "@material-ui/core";
import styledEngine from "@material-ui/styled-engine";
import styled from 'styled-components'



export const HeaderBar = styledEngine(AppBar)({
    background: '#3D5A80',
    boxShadow: '0px 10px 19px -5px rgba(0,0,0,0.78)'
})

export const HeaderToolBar = styled.div`
    padding: 5px 25px;
    box-sizing: border-box;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h1 {
        margin: 0;
    }

    .iconMenu {
        display: none;
    }

    .navbar {
        width: 64%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .links {
            width: 180px;
            display: flex;
            justify-content: space-between;

            a {
                text-decoration: none;
                color: #FFFFFF;
                font-size: 19px;
                font-weight: 600;

                :hover {
                    color: #FF715B;
                    cursor: pointer;
                    transition: 0.4s;
                }
            }

            @media (max-width: 1024px) {
                display: none;
            }
        }

        .linksLogin {
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            button {                
                color: #FFFFFF;                

                :hover {
                    color: #FF715B;
                    cursor: pointer;
                    transition: 0.4s;
                }
            }

            a {                
                text-decoration: none;
                color: #FFFFFF;
                font-size: 19px;
                font-weight: 600;

                :hover {
                    color: #FF715B;
                    cursor: pointer;
                    transition: 0.4s;
                }            
            }

            @media (max-width: 1024px) {
                display: none;
            }
        }
    }

    .isLog {
        width: 100%;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        button {
            color: #FFFFFF;
            :hover {
                color: #FF715B;
            }
        }
    }

    @media (max-width: 1024px){
        justify-content: space-between;
        padding: 0 50px;

        .iconMenu {
            display: block;
        } 
        
    }

    @media (max-width: 510px) {
        height: 100px;
    }
`

export const ButtonLog = styledEngine(Button)({

})

export const MenuLists = styled(MenuList)({
    width: '100%',
    padding: '0',
    a : {
        textDecoration: 'none',
        color: '#FFFFFF',        
    }
})

