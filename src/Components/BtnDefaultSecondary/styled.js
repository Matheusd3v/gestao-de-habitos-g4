import styled from 'styled-components'


export const ButtonStyled = styled.button`
    height: 50px;
    border-radius: 5px;
    border: none;
    background: #98c1d9;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid transparent;
    svg {
        width: 30px;
        height: 30px;
        margin: 0;
        background: #FFFFFF;
        border-radius: 100%;
    }

    :hover{
        cursor: pointer;
    }
`