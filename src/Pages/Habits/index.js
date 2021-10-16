
import React, { useEffect, useState } from 'react'
import FilterHabits from '../../Components/FilterPageHabits'
import api from '../../Services/api'

const HabitsPage = () => {
    const [habitsUser, setHabitsUser] = useState([])

    useEffect(() => {
      api
      .get('/habits/personal/', {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` }})
      .then((resp) => setHabitsUser(resp.data))
      .catch((e) => console.log(e)) 
    }, [])

    return (
        <>
            <FilterHabits habitsUser={habitsUser}/>
        </>
    )
}

export default HabitsPage
