import styled, { keyframes } from "styled-components";
import RegisterImage from "../../assets/register.svg";

export const Container = styled.div`
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Background = styled.div`
  @media (min-width: 800px) {
    flex: 1;
    background: url(${RegisterImage}) no-repeat center, #3d5a80;
    background-size: contain;
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

const appearFromRigth = keyframes`

    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromRigth} 1s;
`;

export const FormContainer = styled.form`
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
