import './style1.js'
import React, { useContext } from 'react'
import  ProgressBar  from '../../Components/ProgressBar'
import Habit from '../../Components/Habit'
import { useEffect } from 'react'
import api from '../../Services/api'
import { UserContext } from '../../Providers/user'
import { HabitsContainer } from './style1.js'
const HabitsPage = () => {
    const { userHabits, setUserHabits, callingHabits } = useContext(UserContext)
    useEffect(()=>{
        callingHabits()
    },[])
    console.log(userHabits)

    return (
        <HabitsContainer>
            {userHabits.map((habit, index)=>(
                <Habit key={index} title={habit.title} description={habit.category} percentage={habit.how_much_achieved} />
            ))}
        </HabitsContainer>
        
    )
}

export default HabitsPage
