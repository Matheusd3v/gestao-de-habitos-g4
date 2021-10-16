import './style1.js'
import { HabitContainer } from './style1.js'
import ButtonDefault from '../ButtonDefault/index.js'
const Habit = ({ title, description }) =>{
    return(
        <HabitContainer>
            <h1>{title}</h1>
            <p>{description}</p>

            <p>Concluído</p>

            <button>Editar Tarefa</button>
        </HabitContainer>
    )
}

export default Habit