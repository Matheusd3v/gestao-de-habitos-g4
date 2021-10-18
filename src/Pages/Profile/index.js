import { AirplanemodeActive } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../Services/api'
import { ProfileContainer } from './style'

const ProfilePage = () => {
    const [name, setName] = useState('')

    const { id } = useParams()

    useEffect(() => {
        api
            .get(`/users/${id}/`)
            .then((response) => setName(response.data.username))
            .catch((e) => console.log(e))
    }, [])

    return (
        <ProfileContainer>
            <h1> Bem vindo(a), {name}!</h1>
        </ProfileContainer>
    )
}

export default ProfilePage
