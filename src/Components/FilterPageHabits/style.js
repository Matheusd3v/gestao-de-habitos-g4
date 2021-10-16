import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContainerFilter = styled(motion.div)`
    width: 300px;
    height: calc(100vh  - 75px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    left: 0;
    top: -52px;
    background: #98c1d9;
    padding: 130px 0;
    box-sizing: border-box;  
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 250px;
        margin-top: auto; 
    }

    @media (max-width: 850px) {
        position: static;
        margin: 0 auto;
        height: 500px;
        padding: 50px 0;
        border-radius: 10px;
    }

`

export const FilterBtn = styled.button`
    color: #FFFFFF;
    width: 300px;
    height: 52px;
    border: 1px solid transparent;
    border-color: transparent;
    border-radius: 10px;
    background: transparent;
    font-size: 23px;    
    position: relative;
    left: 0;
    top: 20px;
    z-index: 1;
    :hover {
        border-color:#FFFFFF;
        cursor: pointer;
    }

    svg {
        display: none;
    }

    @media (max-width: 850px) {
        position: static; 
        margin: 40px auto;
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        svg {
            display: block;
        }
    }
`

export const OptionsFilterBtn = styled.button`
    width: 70%;
    margin: 10px 0;
    height: 60px;
    border: 2px solid transparent;
    border-radius: 7px;
    background: #C4C4C4;
    font-size: 20px;
    color: #293241;

    :hover {
        border: 2px solid #FFFFFF;
        transition: 0.4s;
        cursor: pointer;
    }
`
