import './style.js'
import { Button } from './style.js'
const ButtonDefault = ({ children, callback }) =>{
    return (
        <Button onClick={callback}>
            { children }
        </Button>
    )
}

export default ButtonDefault