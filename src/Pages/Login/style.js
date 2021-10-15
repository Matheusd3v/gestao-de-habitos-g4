import styled from "styled-components";

export const Container = styled.main`
  margin: 0;
  min-height: 100vh;
  background-color: #293241;
  display: flex;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 200px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    background: #98c1d9;
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
`;
