import { createContext, useState, useEffect } from 'react'
import api from '../../Services/api';
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ currentFilterHabits, setCurrentFilterHabits ] = useState([])
    const [ userHabits, setUserHabits ] = useState([])
    const [tokenUser, setTokenUser] = useState( JSON.parse(localStorage.getItem('token')) || '');

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(tokenUser) { 
            setIsLogin(true) 
        }
        else {
            setIsLogin(false)
        }
    }, [tokenUser])
    
    const logOut = () => {
        localStorage.clear();
        setTokenUser('');        
    }
    const callingHabits = () =>{
            const token = localStorage.getItem('token')
            api
                .get('/habits/personal/', {
                    headers:{ Authorization: `Bearer ${JSON.parse(token)}`}
                })
                .then((response)=> {
                    setUserHabits(response.data)
                    setCurrentFilterHabits(response.data)
                })
                .catch((err)=>console.log(err))
    }

    return (
        <UserContext.Provider value={{logOut, tokenUser, setTokenUser,isLogin, userHabits, setUserHabits, callingHabits, currentFilterHabits, setCurrentFilterHabits }}>
            {children}
        </UserContext.Provider>
    )
}