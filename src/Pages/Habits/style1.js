import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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