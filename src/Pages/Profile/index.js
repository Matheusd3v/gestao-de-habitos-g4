import { Button, TextField } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../Services/api'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormEditProfile, ProfileContainer } from './style'
import ButtonDefault from '../../Components/ButtonDefault';
import { UserContext } from '../../Providers/user';
import { toast } from "react-toastify";
import imageBackground from '../../assets/backProfile.svg'
import femAvatar from '../../assets/femaleAvatar.svg'
import maleAvatar from '../../assets/maleAvatar.svg'
import random1 from '../../assets/random1.svg'
import random2 from '../../assets/random2.svg'
import random3 from '../../assets/random3.svg'


const ProfilePage = () => {
    const { name, email, getNameAndEmail, tokenUser } = useContext(UserContext)
    const { id } = useParams()
    const [ready, setReady] = useState('true')
    const [currentAvatar, setCurrentAvatar] = useState(random1)
    const [allAvatar, setAllAvatar] = useState([
        femAvatar, maleAvatar, random1, random2, random3
    ])

    const formSchema = yup.object().shape({
        username: yup.string(),
        email: yup.string().email()
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmitFunction = (data) => {
        api
        .patch(`/users/${id}/`, data, {
            headers: { Authorization: `Bearer ${tokenUser}` },
        })
        .then((response) => {
            console.log(response)
            toast("Informações editadas !", {
                type: "success",
              });
        })
        .catch((e) => console.log(e))        
    }

    useEffect(() => {
        getNameAndEmail()           
    }, [onSubmitFunction])


    const changeAvatar = () => {
        let min = 0;
        let max = 4;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        setCurrentAvatar(allAvatar[random])
    }


    return (
        <ProfileContainer>
            <h1> Bem vindo(a), {name}!</h1>
            
            <main className='mainContainer'>
                <div className='editContainer'>
                    <div className='profileEdit'>
                        <img className='profile' src={currentAvatar} alt='profile avatar'/>

                        <Button className='changeProfile' onClick={changeAvatar} >Trocar imagem de perfil</Button>
                    </div>
                    
                    <FormEditProfile onSubmit={handleSubmit(onSubmitFunction)}>
                        <h3>Editar informações</h3>
                        <TextField 
                            defaultValue={name}
                            readyonly='read'
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
                            defaultValue={email}
                            readyonly={ready}
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            size="small"
                            color="primary"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    
                        <ButtonDefault  className='save' type='submit'>Salvar</ButtonDefault>
                    </FormEditProfile>
                </div>
                <img className='image1' src={imageBackground} alt='ImagetoProfile' />
            </main>
        </ProfileContainer>
    )
}

export default ProfilePage
