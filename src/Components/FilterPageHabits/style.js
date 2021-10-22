import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerFilter = styled(motion.div)`
  width: 300px;
  min-height: calc(100vh - 70px);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #98c1d9;
  padding: 80px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    margin-top: auto;
  }
  .closePopup {
    display: none;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 0 auto;
    height: 500px;
    padding: 50px 0;
    border-radius: 10px;
    .closePopup {
      font-size: 50px;
      color: #fff;
      position: absolute;
      top: 0px;
      right: 0px;
      display: block;
    }
  }
`;

export const FilterBtn = styled.button`
  color: #ffffff;
  width: 300px;
  height: 52px;
  border: 1px solid transparent;
  border-color: transparent;
  border-radius: 10px;
  background: transparent;
  font-size: 23px;
  position: absolute;
  left: 0;
  top: 80px;
  z-index: 1;
  cursor: pointer;

  svg {
    display: none;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 40px auto;
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    svg {
      display: block;
    }
  }
`;

export const OptionsFilterBtn = styled.button`
  width: 70%;
  margin: 10px 0;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 7px;
  background: #c4c4c4;
  font-size: 20px;
  color: #293241;

  :hover {
    border: 2px solid #ffffff;
    transition: 0.4s;
    cursor: pointer;
  }
`;
