import Popup from 'reactjs-popup';
import CreatingHabitsForm from '../CreatingHabitsForm';
import { IoIosAdd, IoIosClose } from "react-icons/io";
import {ButtonAdd, Ancor} from './style.js'
import { useState } from 'react';
import ButtonDefault from '../ButtonDefault'
const Modal = ({ children, type, group }) =>{
      
      const callBack = () =>{
        setOpen(o => !o)
      }

      const [open, setOpen] = useState(false);
      const closeModal = () => setOpen(false);
      return (
        <>
        
          {type==='add' && 
          (
            <ButtonAdd  onClick={callBack}>
                <IoIosAdd/>
            </ButtonAdd>
           ) 
          }

          {type ==='createForm' && <ButtonDefault callback={callBack}>Cadastrar</ButtonDefault>}           
        
          <Popup open={open} nested closeOnDocumentClick onClose={closeModal}>
          <Ancor className="close" onClick={closeModal}>
            <IoIosClose/>
          </Ancor>
            <div className="modal">
             { children }
            </div>
           
          </Popup>
        </>
      );
    
     
   
}
export default Modal