import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const HabitsContainer = styled.div`
    margin-left: 300px;
    display: flex;
    justify-content: center;
    @media screen and (max-width:767px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px;
    }
`