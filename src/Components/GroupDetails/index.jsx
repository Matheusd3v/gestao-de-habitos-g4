import { GroupDetailsContainer } from './style.js'
import ButtonDefault from '../ButtonDefault'
import { useContext } from 'react'
import { UserContext, UserProvider } from '../../Providers/user/index.js'
import { AnimatePresence } from 'framer-motion'
const GroupDetails = ({group}) =>{
    const { subscribeGroup } = useContext(UserContext)
    return(
        <AnimatePresence>
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
                        {group.activities.map((activitie)=><p key={activitie.id}>{activitie.title}</p>)}
                    </>
                 )
                 :
                 (
                    <h3>O grupo não tem atividades</h3>
                 )
                 }
                {group.goals.length !==0 ?
                 (
                    <>
                        <h3>Metas do grupo</h3>
                        {group.goals.map((goal)=><p key={goal.id}>{goal.title}</p>)}
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
        </AnimatePresence>
    )
}

export default GroupDetails