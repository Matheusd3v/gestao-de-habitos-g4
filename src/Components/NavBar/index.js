import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { ButtonLog, HeaderBar, HeaderToolBar, MenuLists} from './style';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar = ({isLog}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (      
      <HeaderBar position="static" >
        <HeaderToolBar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className='iconMenu'
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuLists>
              <MenuItem onClick={handleClose}>Grupos</MenuItem>
              <MenuItem onClick={handleClose}>Hábitos</MenuItem>
              <MenuItem onClick={handleClose}>Usuário</MenuItem>
              <MenuItem onClick={handleClose}>Objetivos</MenuItem>
              <MenuItem onClick={handleClose}>Atividades</MenuItem>
              {isLog? (
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              ) : (
                <>
                  <MenuItem onClick={handleClose}><Link to='/login'>Login</Link> </MenuItem>
                  <MenuItem onClick={handleClose}><Link to='/register'>Cadastrar</Link> </MenuItem>
                </>
              )}
            </MenuLists>
          </Menu>


          {isLog? (
              <div className='navbar'>                
                <h1>Gestão de Habitos</h1>
                <div className='linksLogin'>
                 <Link to='/groups'>Grupos</Link>
                 <Link to ='/habits'>Hábitos</Link>
                 <ButtonLog>Logout</ButtonLog>
                </div>
              </div>
          ) : (
              <div className='navbar'>
                  <h1>Gestão de Hábitos</h1>
                  <div className='links'>
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
