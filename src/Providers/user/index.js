import { createContext, useState, useEffect } from 'react'
import api from '../../Services/api';
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ currentFilterHabits, setCurrentFilterHabits ] = useState([])
    const [ newHabit, setNewHabit ] = useState([])
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
                    headers:{ Authorization: `Bearer ${tokenUser}`}
                })
                .then((response)=> {
                    setUserHabits(response.data)
                    setCurrentFilterHabits(response.data)
                })
                .catch((err)=>console.log(err))
    }
    const addingHabit = (wholeHabit) =>{
        const token = localStorage.getItem('token')
        api.post('/habits/', wholeHabit, {
            headers:{ Authorization: `Bearer ${tokenUser}`}
        })
        .then((response) => console.log(response))
        .catch((e) => console.log(e))
    }

    return (
        <UserContext.Provider value={{logOut, tokenUser, setTokenUser,isLogin, userHabits, setUserHabits, callingHabits, currentFilterHabits, setCurrentFilterHabits, newHabit, setNewHabit, addingHabit }}>
            {children}
        </UserContext.Provider>
    )
}