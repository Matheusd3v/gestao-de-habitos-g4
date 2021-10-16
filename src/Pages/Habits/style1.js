import styled from 'styled-components'

export const HabitsContainer = styled.div`
    display: flex;
    margin: 50px;
    @media screen and (max-width:768px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px;
    }
`