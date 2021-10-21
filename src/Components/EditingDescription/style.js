import styled from 'styled-components'
export const DescriptionContainer = styled.div`
     background: #fff;
    height: 840px;
    h2{
        color: white;
        font-size: 27px;
    }  width: 100vw;
    max-width: 500px;
    height: 840px;
    border-radius: 5px;
    
    text-align: center;
    form{
        margin: 0 auto;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center
    }
    button{
        margin: 0 auto;
        margin-top: 10px;
        background-color: #FF715B;
        color: white;
        font-size: 24px;
        border: none;
        width: 250px;
        max-width: 200px;
        border-radius: 10px;
        padding: 15px;
        cursor: pointer;
        box-shadow: 5px 5px rgb(240, 105, 70);
        transition: 0.5s;
        margin-bottom: 10px;
    }
    button:hover{
        box-shadow: 1px 3px rgb(255, 113, 70);   
    }
    @media screen and (min-width:768px){
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

` 