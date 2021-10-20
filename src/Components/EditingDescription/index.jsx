import { DescriptionContainer } from './style.js'
import { useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../Providers/user/index.js';
import { GroupContext } from '../../Providers/groups/index.js';
const EditingDescription = ({ group }) =>{
    const { callingGroups, editDescription } = useContext(GroupContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        const { description } = data
        const id = group.id
        const idAndDescription = {description, id}
        editDescription(idAndDescription)
        callingGroups()
    }
    return(
       <DescriptionContainer>
           <h1>Atulizar descrição</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
           <TextField
            label='Editar descrição'
            multiline
            rows={4}
            rowsMax={4}
            {...register('description')}
            />
            <button type='submit'>Enviar</button>
           </form>
       </DescriptionContainer>
   ) 
}

export default EditingDescription