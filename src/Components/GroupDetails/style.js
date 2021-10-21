import styled from 'styled-components'
export const GroupDetailsContainer = styled.div`

    background: rgba( 152, 193, 217, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white;
    width:100vw;
    max-width: 600px;
    height: 540px;
    overflow: auto;
    background-color: #98C1D9;
    border-radius:5px;

    .info-container{
        display:flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        flex-direction: column;
    }

    .info-container .goalsDiv {
        background: #FFFFFF;
        color: black;
        width: 80%;
        border-radius: 10px;
        padding: 10px 50px;
        box-sizing: border-box;
        overflow: auto;
        height: 300px;
    } 

    .info-container .goalsDiv ul, li {
        padding: 0;
    }

    button{
        margin: 0 auto;
        margin-top: 10px;
        background-color: #FF715B;
        color: white;
        font-size: 24px;
        border: none;
        width: 250px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 5px 5px rgb(240, 105, 70);
        transition: 0.5s;
        padding: 10px 0;
        margin-bottom: 20px;
    }

    .backgroundDesc {
        background: #FFFFFF;
        border-radius: 5px;
        width: 80%;
        color: black;
        padding: 5px 15px;
        box-sizing: border-box;

        p {
            margin: 2px 0;
        }
    }

    button:hover{     
        box-shadow: 1px 3px rgb(255, 113, 70);   
    }

    @media screen and (max-width: 620px) {
        padding: 15px;
        width: 90vw;
        height: 80vh;
    }
` 