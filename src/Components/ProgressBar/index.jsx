import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'
const ProgressBarMobile = ({percentage, name}) =>{
    
    return(
        <CircularProgressbar value={percentage} text={`${percentage}%`}  className='circle-progress'/>
    )
}

export default ProgressBarMobile