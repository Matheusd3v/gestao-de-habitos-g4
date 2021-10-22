import styled from "styled-components";
import { motion } from "framer-motion";
export const ButtonAdd = styled(motion.button)`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 25px;
  height: 50px;
  width: 50px;
  z-index: 1;
  border-radius: 50%;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 113, 91);
  color: #fff;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    cursor: pointer;
    color: rgb(255, 113, 91);
    border: 1px solid rgb(255, 113, 91);
    transition: 0.3s;
  }
`;
export const ButtonEdit = styled(motion.button)`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 10px;
  border: none;
  background: none;
  svg {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    svg {
      font-size: 30px;
    }
  }
`;

export const ButtonCreate = styled.button`
  color: red;
  border: none;
  background: none;
  svg {
    font-size: 50px;
  }
`;

export const Ancor = styled(motion.a)`
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  right: 0px;
  transition: 1s;
  :hover{
    color:red
  }
`;
export const ButtonEditPencil = styled.button`
  display: inline;
  background: none;
  border: none;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;
export const ButtonEditDescription = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  svg {
    font-size: 50px;
  }
`;
export const ModalContainer = styled(motion.div)``;

export const Button = styled.button`
  height: 50px;
  border-radius: 5px;
  border: none;
  background: #ff715b;
  font-weight: bold;
  display: flex;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid transparent;
  margin: 0 auto 10px;

  svg {
    width: 30px;
    height: 30px;
    margin: 0;
    background: #98c1d9;
    border-radius: 100%;
  }

  :hover {
    cursor: pointer;
  }
`;
