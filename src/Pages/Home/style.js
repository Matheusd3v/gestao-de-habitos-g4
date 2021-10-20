import { motion } from "framer-motion";
import styled from "styled-components";
export const HomeContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: sans-serif;

  img {
    width: 500px;
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

  .info-container p {
    padding: 10px;
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
  }
  button:hover {
    box-shadow: 1px 3px rgb(255, 113, 70);
  }
  @media screen and (min-width: 768px) {
    .info-container {
      flex-direction: row-reverse;
      justify-content: space-evenly;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  p {
    width: 100%;
    font-size: 32px;
    margin-bottom: 0;
  }
`;
