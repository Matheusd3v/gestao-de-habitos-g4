import { TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form';
import { Container } from './style'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react';
import { UserContext } from '../../Providers/user';
const CreatingActivity = ({ group }) =>{
    const { creatingActivitie } = useContext(UserContext)
    const schema = yup.object().shape({
        title:yup.string().required("Titulo obrigatório")
    })
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema)
    });
    const onSubmit = (data) =>{
        const { id } = group 
        const { title } = data
        const requisitionBody = {id, title }
        creatingActivitie(requisitionBody)
    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Adicionar Atividade</h1>
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
                <button type='submit'>Enviar</button>
            </form>

        </Container>
    )
}

export  default CreatingActivity