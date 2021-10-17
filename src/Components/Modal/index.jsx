import Popup from 'reactjs-popup';
import CreatingHabitsForm from '../CreatingHabitsForm';
import { IoIosAdd, IoIosClose } from "react-icons/io";
import {ButtonAdd, Ancor} from './style.js'
import { useState } from 'react';
import ButtonDefault from '../ButtonDefault'
const Modal = () =>{
  // onClick={() =>)}
      const callBack = () =>{
        console.log("a")
        setOpen(o => !o)
      }
      const [open, setOpen] = useState(false);
      const closeModal = () => setOpen(false);
      return (
        <>
          <ButtonAdd  onClick={callBack}>
              <IoIosAdd/>
          </ButtonAdd>
         
          <Popup open={open} nested closeOnDocumentClick onClose={closeModal}>
          <Ancor className="close" onClick={closeModal}>
            <IoIosClose/>
          </Ancor>
            <div className="modal">
             <CreatingHabitsForm/>
            </div>
           
          </Popup>
        </>
      );
    
     
   
}
export default Modal