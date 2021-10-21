import { EditActiviesContainer } from './style.js'
import { TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../Providers/user/index.js'
import { GroupContext } from '../../Providers/groups/index.js'
const EditActivies = ({ acitivities }) =>{
    const { editActivie } = useContext(UserContext)
    const { register, handleSubmit } = useForm()
    const { callingGroups } = useContext(GroupContext)
    const onSubmit = (data)=>{
        const { title } = data
        const id = acitivities.id
        const idAndTitle = { title, id }
        console.log(idAndTitle)
        editActivie(idAndTitle)
        callingGroups()
    }
    return(
        <EditActiviesContainer>
            <h1>Editar atividade</h1>
            <h2>{acitivities.title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    defaultValue={acitivities.title}
                    label='Insira o novo titulo'
                    valueLabelDisplay="auto"
                    key="slider"
                    {...register("title")}
                /> 
                <button type='submit'>Enviar</button>
            </form>
        </EditActiviesContainer>
    )
}

export default EditActivies