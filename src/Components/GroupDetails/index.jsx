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
                <div className='backgroundDesc' >
                    <p >{group.description}</p>
                </div>

                <h3>Categoria</h3>
                <div className='backgroundDesc' >
                    <p>{group.category}</p>
                </div>
                
                {group.activities.length !==0?
                 (
                    <>
                        <h3>Atividades do grupo</h3>
                        <div className='backgroundDesc' >
                        {group.activities.map((activitie)=><p key={activitie.id}>{activitie.title}</p>)}
                        </div>
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
                        <ul className='goalsDiv'>
                        {group.goals.map((goal)=><li key={goal.id}>{goal.title}</li>)}
                        </ul>
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