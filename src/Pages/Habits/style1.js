import styled from 'styled-components'

export const HabitsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
    @media screen and (max-width:767px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px;
    }
`