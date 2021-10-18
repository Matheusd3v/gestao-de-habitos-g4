import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavContainer = styled(motion.nav)`
    width: 450px;
    display:block;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;       
        
    }

    ul a {
        text-decoration: none;
        color: white;
        font-size: 18px;
    }

    ul a:hover {
        color: #FF715B;
        text-decoration: underline;
        transition: 1s;
    }

    .logout {
        width: 300px;
        margin-left: auto;
    }

    button {
        border-radius: 10px;
        border: 1px solid transparent;
        height: 35px;
        padding: 0 15px;
        display: block;
    }

    @media (max-width: 800px) {
        position: absolute;
        z-index: 2;
        left: 0;
        height: fit-content;
        top: 70px;
        background: #3D5A80;
        width: 100%;
        display: flex;
        justify-content: center;

        ul {
            height: 250px;
            flex-direction: column;
            justify-content: space-evenly;
        }

        button {
            border-radius: 10px;
            border-color: #FFFFFF;
            height: 35px;
            padding: 0 25px;
            display: block;
        }
    }

`