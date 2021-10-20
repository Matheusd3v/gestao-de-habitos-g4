import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;    

    svg{
        font-size: 40px;
    }

    .mobile {
        display: none;
    }

    .add-button{
        cursor: pointer;
        position: fixed;
        right: 5px;
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }

    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;

        .desktop {
            display: none;
        }

        .mobile {
            position: absolute;
            top: 180px;
        }
    }
`
export const HabitsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 1100px;
    padding: 45px 0;
    padding-left: 60px;     
    box-sizing: border-box;
    margin: 0 auto;

    @media screen and (max-width:750px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
`