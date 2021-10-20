import { Container } from './style'
import { Slider } from '@material-ui/core'
import { useContext, useState } from 'react'
import { UserContext } from '../../Providers/user'
import { useForm } from 'react-hook-form'
const EditGoal = ({ goal }) =>{
    const { editGoal } = useContext(UserContext)
    const [ achiviedPercentage, setAchiviedPercentage ] = useState(goal.how_much_achieved)
    console.log(goal)
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>{
        const id = goal.id
        const  how_much_achieved   = Number(data.how_much_achieved)
        const idAndAchivied = { how_much_achieved, id}
        editGoal(idAndAchivied)
    } 
    return(
        <Container>
            <h1>{goal.title}</h1>
            <h2>Quantos porcento dessa meta foi concluída ?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Slider
                    key="slider"
                    defaultValue={goal.how_much_achieved}
                    onChange={(e) => setAchiviedPercentage(e.target.value)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    {...register("how_much_achieved")}
                /> 
                <button type='submit'>Enviar</button>
            </form>
            
        </Container>
    )
}
export default EditGoal