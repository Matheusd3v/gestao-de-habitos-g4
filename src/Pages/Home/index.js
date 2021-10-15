import './style.js'
import { HomeContainer } from './style.js'
import img1 from '../../assets/acceptTerms.svg' 
import img2 from '../../assets/addToCart.svg'
import img3 from '../../assets/coWorking.svg'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <HomeContainer>
           <section className='info-container'>
                <motion.img 
                    initial={{opacity:0, x:200}}
                    transition={{ duration: 2}}
                    animate={{opacity:1, y:0, x:0}} 
                    src={img1} 
                    alt='img-teste'
                />
               <p>Aqui você pode organizar melhor suas tarefas s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make  </p>
           </section>
           <section className='info-container second'>
               <motion.img 
                    initial={{opacity:0, x:-200}}
                    transition={{ duration: 2}}
                    animate={{opacity:1, y:0, x:0}} 
                    src={img2} 
                    alt='img-teste'
                />
               <p>Crie, edite ou removas suas atividades  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  essentially unchanged. </p>
           </section>
           <section className='info-container'>
                <motion.img 
                    initial={{opacity:0, x:200}}
                    transition={{ duration: 2}}
                    animate={{opacity:1, y:0, x:0}} 
                    src={img3} 
                    alt='img-teste'
                />
               <p>Junte-se com seus amigos em um grupo de desenvolvimento s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
           </section>
           <button>Cadastre-se</button>
        </HomeContainer>
    )
}
export default Home