import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'
const ProgressBarMobile = ({percentage, name}) =>{
    
    return(
        <CircularProgressbar value={percentage} text={`${percentage}%`}  className='circle-progress'
            styles={buildStyles({
                textColor: "#fff",
                pathColor: "#FF715B",
                trailColor: "#fff"
            })}
        />
    )
}

export default ProgressBarMobile