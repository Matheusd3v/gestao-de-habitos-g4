
import React, { useState } from 'react'
import { ContainerFilter, FilterBtn, OptionsFilterBtn } from './style'
import health from '../../assets/health.svg';
import { AiFillFilter } from "react-icons/ai";
import  { useContext } from 'react'
import { UserContext } from '../../Providers/user'
const FilterHabits = ({showMob, setShowMob}) => {
    const { userHabits, setCurrentFilterHabits } = useContext(UserContext)
    const [showFilter, setShowFilter] = useState(false)
    
    

    const filterAchieved = () =>{
        const achieved = userHabits.filter((habit)=> habit.achieved) 
        setCurrentFilterHabits(achieved)
    }

    const filterInProgress = () =>{
        const inProgress = userHabits.filter((habit)=> !habit.achieved)
        setCurrentFilterHabits(inProgress)
    }

    const allHabits = () =>{
        setCurrentFilterHabits(userHabits)
    }

    return (
        <>
                        

            <ContainerFilter
            initial={{opacity:0 , x:-300}}
            transition={{ duration: 1}}
            animate={{opacity:1, x: 0}} 
            >
                <OptionsFilterBtn onClick={filterAchieved} >Alcançados</OptionsFilterBtn>
                <OptionsFilterBtn onClick={filterInProgress} >Em progresso</OptionsFilterBtn>
                <OptionsFilterBtn onClick={allHabits}>Todos</OptionsFilterBtn>

                <img src={health} alt='Heath Habit' />

            </ContainerFilter>
        </>
    )
}

export default FilterHabits
