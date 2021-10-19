import Popup from 'reactjs-popup'
import styled from 'styled-components'
import { motion } from 'framer-motion'
export const ButtonAdd = styled(motion.button)`
    cursor: pointer;
        position: fixed;
        right: 5px;
        height: 70px;
        width: 70px;
        border-radius: 50%;
    :hover{
        cursor: pointer;
    }
`

export const Ancor = styled.a`
    
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    right: 0px;
`
export const ModalContainer= styled(motion.div)`
`
