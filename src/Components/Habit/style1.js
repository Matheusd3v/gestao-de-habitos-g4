import styled from "styled-components";
export const HabitContainerDesktop = styled.div`
  background-color: #98c1d9;
  border-radius: 5px;
  margin: 10px;
  padding: 10px 5px;
  box-sizing: border-box;
  display: none;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 300px;
  height: 300px;

  h1 {
    font-size: 20px;
    text-align: center;
  }

  .backWhite {
    background: #FFFFFF;
    border-radius: 5px;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 5px;
    height: 90px;
    margin-bottom: 10px;
  }

  .backWhite p {
    margin: 0;
  }

  .button {
    margin-top: 20px;
    background-color: #3d5a80;
    color: white;
    border: 0;
    padding: 5px 15px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 5px 5px #2d5a70;
    transition: 0.5s;
  }
  .button:hover {
    box-shadow: 1px 2px #2d5a70;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ContainerBlue = styled.div`
  background-color: #98c1d9;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
`

export const HabitContainerMobile = styled.div`
  width: 90%;
  margin: 10px 0px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #98c1d9;

  .pencil {
    background-color: transparent;
    border: red;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
  }

  .content {
    width: 50%;
    display:flex;
    flex-direction: column;
  }

  button {
    margin: 0;
    margin-bottom: auto;
  }

  h1 {
    font-size: 20px;
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
