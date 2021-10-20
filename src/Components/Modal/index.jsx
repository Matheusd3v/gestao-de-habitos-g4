import Popup from 'reactjs-popup';
import CreatingHabitsForm from '../CreatingHabitsForm';
import { IoIosAdd, IoIosClose, IoIosArchive } from "react-icons/io";
import { ButtonAdd, ButtonEdit ,Ancor, ModalContainer, ButtonEditPencil,ButtonEditDescription } from './style.js'
import { useState } from 'react';
import ButtonDefault from '../ButtonDefault'
import { AnimatePresence } from 'framer-motion';
import BtnDefaultSecondary from '../BtnDefaultSecondary';
const Modal = ({ children, type, group }) =>{
      
      const callBack = () =>{
        setOpen(o => !o)
      }

      const [open, setOpen] = useState(false);
      const closeModal = () => setOpen(false);
      return (
        <>
                  
          {type === 'btnSecondary' && <BtnDefaultSecondary onClick={callBack}></BtnDefaultSecondary>}
           {type ==='createForm' && <BtnDefaultSecondary callback={callBack}>Cadastrar</BtnDefaultSecondary>}  
           {type==='add' && <ButtonAdd onClick={callBack}><IoIosAdd/></ButtonAdd>}
           {type==='edit'&& <ButtonEdit onClick={callBack}><IoIosArchive/></ButtonEdit>}
           {type==='edit-pencil' && <ButtonEditPencil onClick={callBack}><IoIosArchive/></ButtonEditPencil>}
           {type==='edit-description' && <ButtonEditDescription onClick={callBack}><IoIosArchive/></ButtonEditDescription>}
         {/* {type==='add' ?
           (
            <ButtonAdd  onClick={callBack}>
                <IoIosAdd/>
            </ButtonAdd>
           ):
           (
            <ButtonDefault callback={callBack}>Ver mais</ButtonDefault>
           ) 
         */}

          <Popup open={open} nested closeOnDocumentClick onClose={closeModal}>
          <Ancor className="close" onClick={closeModal}>
            <IoIosClose/>
          </Ancor>
          <AnimatePresence>
              <ModalContainer
                initial={{  opacity:0, y:-50}}
                exit={{opacity:0}}
                animate={{ opacity:1, x:0, y:0 }}
                transition={{duration:1.2}}
              >
              { children }
              </ModalContainer>
            </AnimatePresence>
          </Popup>
        </>
      );
    
     
    //   <AnimatePresence>
    //   {isVisible && (
    //     <motion.h2 
    //       exit={{y:-1000}}
    //       initial={{ scale: 0, opacity:0, x:-50, y:-50 }}
    //       animate={{ scale: 1, opacity:1, x:0, y:0 }}
    //       transition={{duration:1.2}}
    //     >
    //       Teste
    //     </motion.h2>
    //   )} 
    // </AnimatePresence>
   
}
export default Modal