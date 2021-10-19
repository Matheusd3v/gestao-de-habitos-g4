import { TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../Services/api'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormEditProfile, ProfileContainer } from './style'
import ButtonDefault from '../../Components/ButtonDefault';

const ProfilePage = () => {
    const [name, setName] = useState('')
    const [showOne, setShowOne] = useState(true)

    const { id } = useParams()

    const formSchema = yup.object().shape({
        username: yup.string(),
        email: yup.string().email()
    })

    useEffect(() => {
        api
            .get(`/users/${id}/`)
            .then((response) => setName(response.data.username))
            .catch((e) => console.log(e))

        // api.post()
    }, [])

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(formSchema)
    });

    const changeBtn = () => {
        setShowOne(!showOne)
    }

    const onSubmitFunction = (data) => {
        console.log(data)
        changeBtn()
    }

    return (
        <ProfileContainer
        // initial={{opacity:0 , x:-300}}
        // transition={{ duration: 1}}
        // animate={{opacity:1, x: 0}} 
        >
            <h1> Bem vindo(a), {name}!</h1>
            <div>
                <FormEditProfile onSubmit={handleSubmit(onSubmitFunction)}>
                    <h3>Editar informações</h3>
                    <TextField 
                        label="Nome"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />

                    <TextField 
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                
                    {showOne && <ButtonDefault type='submit'>Salvar</ButtonDefault>}
                </FormEditProfile>
                {!showOne && <ButtonDefault callback={changeBtn}>Editar</ButtonDefault>}
            </div>
        </ProfileContainer>
    )
}

export default ProfilePage
