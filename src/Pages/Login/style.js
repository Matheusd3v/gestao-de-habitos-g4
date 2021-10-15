import styled from "styled-components";

export const Container = styled.main`
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #293241;
  img {
    display: none;
  }
  form {
    background: rgba(152, 193, 217, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12);
    backdrop-filter: blur(16.5px);
    -webkit-backdrop-filter: blur(16.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 200px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    padding: 15px;
    /* fieldset {
      border-color: #fff;
    }
    input:hover {
      border-color: red;
    }
    label {
      color: #fff;
    } */
  }
  Button {
    width: 150px;
  }
  @media (min-width: 768px) {
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
    background: linear-gradient(to right, #ffffff 0%, #3d5a80 49%, #293241 74%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#293241',GradientType=1 );
    img {
      display: initial;
      width: 50%;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  h2 {
    color: #fff;
    font-size: 32px;
    text-align: center;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    width: 40%;
    margin-right: 20px;
  }
`;
