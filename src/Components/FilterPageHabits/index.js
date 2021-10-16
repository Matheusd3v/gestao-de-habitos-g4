
import React, { useState } from 'react'
import { ContainerFilter, FilterBtn, OptionsFilterBtn } from './style'
import health from '../../assets/health.svg';
import { AiFillFilter } from "react-icons/ai";


const FilterHabits = ({habitsUser}) => {
    const [showFilter, setShowFilter] = useState(false)
    const [achieved, setAchieved] = useState([])
    const [inProgress, setInProgress] = useState([])

    const pushAndPull = () => {
        setShowFilter(!showFilter)
    }

    const filterAchieved = () => {
        let habits = habitsUser.filter((el) => el.achieved );
        setAchieved(habits)        
    }

    const filterInProgress = () => {
        let progress = habitsUser.filter((el) => !el.achieved );
        setInProgress(progress)        
    }

    return (
        <>
            <FilterBtn variant='outlined' onClick={pushAndPull}>Filtrar <AiFillFilter/> </FilterBtn>
            

            {showFilter && <ContainerFilter
                 initial={{opacity:0 , x:-300}}
                 transition={{ duration: 1}}
                 animate={{opacity:1, x: 0}} 
                >
                <OptionsFilterBtn onClick={filterAchieved} >Alcançados</OptionsFilterBtn>
                <OptionsFilterBtn onClick={filterInProgress} >Em progresso</OptionsFilterBtn>
                <OptionsFilterBtn>Todos</OptionsFilterBtn>

                <img src={health} alt='Heath Habit' />

            </ContainerFilter>}
        </>
    )
}

export default FilterHabits
