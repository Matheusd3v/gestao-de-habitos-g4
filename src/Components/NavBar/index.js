import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { HeaderBar, HeaderToolBar} from './style';
import { Link } from 'react-router-dom';

const NavBar = ({isLog}) => {
    
    return (      
        <HeaderBar position="static" >
          <HeaderToolBar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton> */}

            {isLog? (
                <h1></h1>
            ) : (
                <div className='notLog'>
                    <h1>Gestão de Habitos</h1>
                    <div className='linksNotLog'>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Cadastro</Link>
                    </div>
                </div>
            )}
            
          </HeaderToolBar>
        </HeaderBar>
      
    )
}

export default NavBar
