import styled, { keyframes } from "styled-components";
import RegisterImage from "../../assets/register.svg";
import { motion } from 'framer-motion'
export const Container = styled.div`
      img{
        display: none;
      }
      margin: 0 auto;
    @media screen and (min-width:768px){
      
      box-sizing:border-box;
      height: calc(100vh - 70px);
      width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: space-around;
      flex-direction: row-reverse;
      background: #ffffff;
      background: -moz-linear-gradient(
        left,
        #ffffff 0%,
        #3d5a80 49%,
        #293241 74%
      );
      background: -webkit-linear-gradient(
        left,
        #ffffff 0%,
        #3d5a80 49%,
        #293241 74%
      );
      background: linear-gradient(to left, #ffffff 0%, #3d5a80 49%, #293241 74%) ;
      overflow: hidden;
      position: relative;
      
      img {
      display: initial;
      width: 50%;
      min-width:500px;
    }
    }
    
    
`;



export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;



export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px;

`;

export const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #f0f8ff;
  width: 280px;
  height: 580px;
  border-radius: 8px;

  h1 {
    margin: 10px 0 0;
  }

  p {
    a {
      text-decoration: none;
      font-weight: bold;
      color: #ff715b;
      text-shadow: 0 0 0.05em #ff715b, 0 0 0.05em #ff715b;
    }
  }
`;
