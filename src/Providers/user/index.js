import { createContext, useState, useEffect } from 'react'
import api from '../../Services/api';
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [tokenUser, setTokenUser] = useState('')
    const [ userHabits, setUserHabits ] = useState([])
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
                .then((response)=> setUserHabits(response.data))
                .catch((err)=>console.log(err))
    }

    return (
        <UserContext.Provider value={{logOut, tokenUser, setTokenUser,isLogin, userHabits, setUserHabits, callingHabits}}>
            {children}
        </UserContext.Provider>
    )
}