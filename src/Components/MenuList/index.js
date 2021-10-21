import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { NavContainer } from "./style";

const MenuList = () => {

  const { isLogin, logOut, getNameAndEmail} = useContext(UserContext)

  return (
    <>
      <NavContainer
      initial={{opacity:0 , x:-300}}
      transition={{ duration: 1}}
      animate={{opacity:1, x: 0}} 
      >
        <div>            
          {isLogin? ( 
            <ul>                
            <li><Link to='/groups/subscriptions'> Meus grupos </Link> </li>
            <li><Link to='/groups'> Grupos </Link></li>
            <li><Link to='/habits'> Hábitos </Link></li>
            <li>
              <Link to={`/profile/${localStorage.getItem('id')}`}>
                <button onClick={getNameAndEmail} className='profileBtn' >
                  Editar Perfil
                </button>
              </Link>
            </li>
            <li><button className='logoutBtn' onClick={logOut}>Logout</button></li>
            </ul>
          ) : (
            <ul className='logout'>
            <li><Link to='/'>Home </Link></li>
            <li><Link to='/login'> Login</Link></li>  
            <li><Link to='/register'> Cadastrar-se </Link></li>
            </ul>
          )}
        </div>
      </NavContainer>
    </>
  )
}

export default MenuList;
