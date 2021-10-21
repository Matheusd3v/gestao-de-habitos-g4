import React, {useState } from 'react';
import { HeaderBar, NameContainer} from './style';
import { AiOutlineMenu } from "react-icons/ai";
import MenuList from '../MenuList';


const NavBar = () => {
  const [menuMobile, setMenuMobile] = useState(false)    

  const showMenu = () => {
    setMenuMobile(!menuMobile)
  }

  return (      
    <HeaderBar >
      <NameContainer>
        <h1>Gestão de Hábitos</h1>
      </NameContainer>

      <button className='btn' onClick={showMenu} > <AiOutlineMenu/> </button> 

      <span className='notShowMob'>{!menuMobile && <MenuList/>}</span>   

      {menuMobile && <MenuList/>}       
    </HeaderBar>
    
  )
}

export default NavBar
