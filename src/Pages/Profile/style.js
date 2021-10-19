import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProfileContainer = styled(motion.div)`
    height: 85vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
        margin: 25px 0;
        margin-top: 15px;
        color: #FFFFFF;
        text-align: center;
    }

    h3 {
        margin: 5px 0;
    }

    .save {
        margin-bottom: 20px;
    }

    .profile {
        height: 150px;
        border: 1px solid #FFFFFF;
        border-radius: 100%;
    }

    .changeProfile {
        margin-top: 5px;
        color: #FFFFFF;
    }

    .image1 {
        height: 450px;
    }

    .profileEdit {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
    }

    .editContainer {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 70px;
        box-sizing: border-box;
    }
    
    .mainContainer {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        padding-left: 30px;
        box-sizing: border-box;
    }

    @media screen and (max-width: 1200px) {
        .image1 {
            display:none;
        }

        .mainContainer {
            justify-content: center;
            padding: 0;
        }

        .editContainer {
            padding: 0;
            align-items: center;
        }
    }

`

export const FormEditProfile = styled.form`
    background: #FFFFFF;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 25px;
    padding-top: 20px;

    button {
        width: 130px;
        height: 35px;
        font-size: 20px;
        padding: 0;        
    }

`