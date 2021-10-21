import styled from "styled-components";

export const Input = styled.input`
  width: 150px;
  border-radius: 8px 0 0 8px;
  padding: 5px;
  border: 1px solid black;
  border-right: none;
  height: 35px;
  transition: 0.3s;

  :focus {
    border: 1px solid black;
    border-right: none;
    outline: none;
    transition: 0.3s;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 210px;
  justify-content: center;
  margin: 10px;
  button {
    padding: 0 6px 0 0;
    border-radius: 0 8px 8px 0;
    height: 35px;
    background-color: #fff;
    border: 1px solid black;
    border-left: none;
    transition: 0.3s;
  }
  button::placeholder {
    text-align: center;
  }
  input:focus + button {
    border: 1px solid black;
    border-left: none;
    outline: none;
    transition: 0.3s;
  }

  svg {
    height: 100%;
  }
`;
