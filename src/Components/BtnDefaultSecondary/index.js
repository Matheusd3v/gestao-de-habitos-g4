import { AiOutlinePlus } from "react-icons/ai";
import React from 'react'
import { ButtonStyled } from './styled'

const BtnDefaultSecondary = ({callback, children}) => {
    
    return (
        <>
            <ButtonStyled onClick={callback} >
                <AiOutlinePlus/>                
                {children}
            </ButtonStyled>
        </>
    )
}

export default BtnDefaultSecondary
