import Popup from "reactjs-popup";
import { IoIosAdd, IoIosClose, IoMdListBox } from "react-icons/io";
import {
  ButtonAdd,
  ButtonEdit,
  Ancor,
  ModalContainer,
  ButtonEditPencil,
  ButtonEditDescription,
  Button,
  ButtonCreate,
} from "./style.js";
import { useState } from "react";

import ButtonDefault from "../ButtonDefault";
import { AnimatePresence } from "framer-motion";
import BtnDefaultSecondary from "../BtnDefaultSecondary";
import { AiOutlinePlus } from "react-icons/ai";
const Modal = ({ children, type, group }) => {
  const callBack = () => {
    setOpen((o) => !o);
  };

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      {type === "seeMore" && (
        <ButtonDefault callback={callBack}>Ver mais</ButtonDefault>
      )}
      {type === "add-activities" && (
        <ButtonCreate onClick={callBack}>
          <IoIosAdd />
        </ButtonCreate>
      )}
      {type === "add-goals" && (
        <Button onClick={callBack}>
          {" "}
          <AiOutlinePlus /> Adicionar Objetivo
        </Button>
      )}
      {type === "add-actitivies" && (
        <Button onClick={callBack}>
          {" "}
          <AiOutlinePlus /> Adicionar Atividade
        </Button>
      )}
      {type === "btnSecondary" && (
        <BtnDefaultSecondary onClick={callBack}></BtnDefaultSecondary>
      )}
      {type === "createForm" && (
        <BtnDefaultSecondary callback={callBack}>Cadastrar</BtnDefaultSecondary>
      )}
      {type === "add" && (
        <ButtonAdd onClick={callBack}>
          <IoIosAdd />
        </ButtonAdd>
      )}
      {type === "edit" && (
        <ButtonEdit onClick={callBack}>
          <IoMdListBox />
        </ButtonEdit>
      )}
      {type === "edit-pencil" && (
        <ButtonEditPencil onClick={callBack}>
          <IoMdListBox />
        </ButtonEditPencil>
      )}
      {type === "edit-description" && (
        <ButtonEditDescription onClick={callBack}>
          <IoMdListBox />
        </ButtonEditDescription>
      )}

      <Popup open={open} nested closeOnDocumentClick onClose={closeModal}>
        <Ancor className="close" onClick={closeModal}>
          <IoIosClose />
        </Ancor>
        <AnimatePresence>
          <ModalContainer
            initial={{ opacity: 0, y: -50 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {children}
          </ModalContainer>
        </AnimatePresence>
      </Popup>
    </>
  );
};
export default Modal;
