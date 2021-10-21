import {Container} from './style.js'
import { useForm } from 'react-hook-form'
import { TextField, MenuItem } from '@material-ui/core'
import { useContext, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserContext } from '../../Providers/user/index.js'
const CreatingGoal = ({ group }) =>{
    const { creatingGoal } = useContext(UserContext)
    const [ currency, setCurrency ] = useState("Fácil")
    const curriencies = [
        {
            value:"Fácil",
            label:'Fácil'
        },
        {
            value:"Intermediário",
            label:"Intermediário"
        },
        {
            value:"Dificil",
            label:"Dificil"
        }
    ]
    const schema = yup.object().shape({
        title: yup.string().required("Titulo obrigatório"),
        description:yup.string().required("Descrição obrigatória")
    })
    const { register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) =>{
        const {description, title} = data
        const requisitionBody = {description, title, difficulty:currency,how_much_achieved:0, group:group.id}
        creatingGoal(requisitionBody)
    }
    return(
        <Container>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id="outlined-basic" 
                label="Título" 
                variant="outlined" 
                margin='normal'
                {...register("title")}

                helperText={errors.title?.message}
                error={!!errors.title}
                sx={{m:2}}
               />
            <TextField
                placeholder=""
                multiline
                rows={4}
                rowsMax={4}
                helperText={errors.title?.message}
                error={!!errors.title}
                {...register('description')}
                sx={{m:2}}
            />

            <TextField
                id="outlined-select-currency"
                select
                value={currency}
                label="Dificuldade do hábito"
                onChange={(e)=> setCurrency(e.target.value)}
                sx= {{width:"58%", m:2}}
            >
                {
                    curriencies.map((option)=>(
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))
                }
            </TextField>
            <button type='submit'>Enviar</button>
            </form>

        </Container>
    )
}

export default CreatingGoal