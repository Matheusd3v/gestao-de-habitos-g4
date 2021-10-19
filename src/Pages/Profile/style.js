import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProfileContainer = styled(motion.div)`
    min-height: calc(100vh - 70px);
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
        margin: 25px 0;
        color: #FFFFFF;
    }

    h3 {
        margin: 5px 0;
    }

    div {
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
    }

    div button {
        width: 130px;
        height: 35px;
        font-size: 20px;
        padding: 0;        
    }

    .save {
        margin-bottom: 20px;
    }

`

export const FormEditProfile = styled.form`
    background: #FFFFFF;
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 25px;
    padding-top: 20px;

`