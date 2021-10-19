import { GroupDetailsContainer } from './style.js'
import ButtonDefault from '../ButtonDefault'
import { useContext } from 'react'
import { UserContext, UserProvider } from '../../Providers/user/index.js'
const GroupDetails = ({group}) =>{
    console.log(group)
    const { subscribeGroup } = useContext(UserContext)
    return(
        <GroupDetailsContainer>
            <div className='info-container'>
                <h1>{group.name}</h1>
                <p>{group.category}</p>
                <h3>Descrição</h3>
                <p >{group.description}</p>
                <h3>Categoria</h3>
                <p>{group.category}</p>
                
                {group.activities.length !==0?
                 (
                    <>
                        <h3>Atividades do grupo</h3>
                        <p>{group.activities}</p>
                    </>
                 )
                 :
                 (
                    <h3>O grupo não tem atividades</h3>
                 )
                 }
                {group.goals.length !==0?
                 (
                    <>
                        <h3>Metas do grupo</h3>
                        <p>{group.goals}</p>
                    </>
                 )
                 :
                 (
                    <h3>O grupo não tem metas</h3>
                 )
                }
                <button onClick={()=>subscribeGroup(group)}>Inscrever-se</button>
            </div>
        </GroupDetailsContainer>
    )
}

export default GroupDetails