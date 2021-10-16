import './style1.js'
import { HabitContainerDesktop, HabitContainerMobile } from './style1.js'
import ButtonDefault from '../ButtonDefault/index.js'
import ProgressBarMobile from '../ProgressBar'
import ProgressBar from "@ramonak/react-progress-bar";
import { IoPencil } from "react-icons/io5";
const Habit = ({ title, description, percentage}) =>{
    return(
        <>
        <HabitContainerDesktop>
            <h1>{title}</h1>
            <p>{description}</p>
            {percentage === 100 ?
             (
                <p>Concluído</p>
             ):
             (
                <p>Não concluído</p>
             )}
            
            <ProgressBar completed={percentage} bgColor="#ffff" width="150px" labelAlignment='right' labelColor='black'/>
            <button>Editar Tarefa</button>
        </HabitContainerDesktop>
        
        <HabitContainerMobile>
            <ProgressBarMobile percentage={percentage}/>
            <p>{description}</p>
            {percentage === 100 ?
             (
                <p>Concluído</p>
             ):
             (
                <p>Não concluído</p>
             )}
            <IoPencil/>
            <button>Editar Tarefa</button>
        </HabitContainerMobile>
        </>
        
    )
}

export default Habit