import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
   let token = JSON.parse(localStorage.getItem('token') || '');

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        token? setIsLogin(true) : setIsLogin(false)
    }, [token])

    const logOut = () => {
        localStorage.setItem('token', JSON.stringify(''));
        token = '';
    }

    return (
        <UserContext.Provider value={{logOut, token, isLogin}}>
            {children}
        </UserContext.Provider>
    )
}