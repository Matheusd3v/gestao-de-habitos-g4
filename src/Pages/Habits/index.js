import './style1.js'
import React, { useContext } from 'react'
import  ProgressBar  from '../../Components/ProgressBar'
import Habit from '../../Components/Habit'
import { useEffect } from 'react'
import api from '../../Services/api'
import { UserContext } from '../../Providers/user'
import { HabitsContainer } from './style1.js'
const HabitsPage = () => {
    const { userHabits, setUserHabits } = useContext(UserContext)
    useEffect(()=>{
        const token = localStorage.getItem('token')
        api
            .get('/habits/personal/', {
                headers:{ Authorization: `Bearer ${JSON.parse(token)}`}
            })
            .then((response)=> setUserHabits(response.data))
            .catch((err)=>console.log(err))
    },[])


    return (
        <HabitsContainer>
            {userHabits.map((habit, index)=>(
                <Habit key={index} title={habit.title} description={habit.category} />
            ))}
        </HabitsContainer>
        
    )
}

export default HabitsPage
