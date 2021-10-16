import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [tokenUser, setTokenUser] = useState('')

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

    return (
        <UserContext.Provider value={{logOut, tokenUser, setTokenUser,isLogin}}>
            {children}
        </UserContext.Provider>
    )
}