import styled from 'styled-components'
export const HabitContainer = styled.div`
    background-color: #98C1D9;
    border-radius: 5px;
    margin: 5px;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    h1{
        font-size:20px;
    }
    button{
        background-color: #3D5A80;
        color: white;
        border: 0;
        padding: 5px 15px;
        font-size: 20px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow:5px 5px #2D5A70;
        transition: 0.5s;
    }
    button:hover{
        box-shadow:1px 2px #2D5A70;
    }
`