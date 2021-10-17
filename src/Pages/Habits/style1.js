import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    

    svg{
        font-size: 40px;
    }
    .add-button{
        cursor: pointer;
        position: fixed;
        right: 5px;
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }
`
export const HabitsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    padding: 55px 0;
    padding-left: 60px;     
    box-sizing: border-box;
    @media screen and (max-width:767px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px;
    }
`