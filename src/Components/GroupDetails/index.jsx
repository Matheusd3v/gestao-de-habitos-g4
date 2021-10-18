import { GroupDetailsContainer } from './style.js'

const GroupDetails = ({group}) =>{
    console.log(group)
    return(
        <GroupDetailsContainer>
            <div className='info-container'>
                <h1>{group.name}</h1>
            </div>
        </GroupDetailsContainer>
    )
}

export default GroupDetails