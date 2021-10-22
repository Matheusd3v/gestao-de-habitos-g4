import { motion } from "framer-motion";
import styled from "styled-components";
export const HomeContainer = styled(motion.div)`
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  min-height: Calc(100vh - 70px);
  height: fit-content;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  font-family: "Indie Flower", cursive;

  .info-container img {
    width: 40%;
    max-width: 400px;
    min-width: 250px;
    box-sizing: border-box;
  }
  .info-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    width: 100%;
  }

  button {
    margin: 0 auto;
    margin-top: 10px;
    background-color: #ff715b;
    color: white;
    font-size: 24px;
    border: none;
    width: 250px;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    box-shadow: 5px 5px rgb(240, 105, 70);
    transition: 1s;
    text-shadow: 1px 1px 1px black;
  }
  button:hover {
    box-shadow: 1px 3px rgb(255, 113, 70);
  }
  @media screen and (min-width: 768px) {
    .info-container {
      flex-direction: row-reverse;
      justify-content: space-evenly;
    }
    .info-container img {
      width: 500px;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 250px;
  max-width: 40%;
  box-sizing: border-box;
  margin: 50px 20px 0 20px;
  p {
    width: 100%;
    font-size: 32px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0 20px;
  }
`;
