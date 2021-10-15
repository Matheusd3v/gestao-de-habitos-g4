import { AppBar, Toolbar } from "@material-ui/core";
import styledEngine from "@material-ui/styled-engine";
import styled from 'styled-components'



export const HeaderBar = styledEngine(AppBar)({
    background: '#3D5A80'
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

    .notLog {
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .linksNotLog {
            width: 150px;
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
        }
    }
`

