import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2 {
    color: white;
    margin: 5px 0;
  }

  hr {
    width: 90%;
  }

  button {
    width: 200px;
    font-size: 20px;

    a {
      text-decoration: none;
      color: white;
      font-weight: 700;
    }
  }

  .popUpPlus {
    margin-bottom: 25px;

    button {
      padding: 0;
      height: 50px;
    }
  }
`;

export const ContainerList = styled.ul`
  width: 88%;
  max-width: 1370px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  li {
    width: 90%;
    min-height: 400px;
    background: #98c1d9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 8px;
    transition: 0.7s;

    h2 {
      text-align: center;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1560px) {
    max-width: 1020px;
  }

  @media screen and (max-width: 1174px) {
    max-width: 680px;
  }

  @media screen and (max-width: 790px) {
    justify-content: center;
  }

  @media (min-width: 450px) {
    flex-flow: row wrap;
    justify-content: space-around;

    li {
      width: 300px;
      margin: 0px 10px 20px;
    }
  }
`;

export const SectionInfo = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  button {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }

  .backgroundDesc {
    background: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;

    p {
      word-break: break-all;
    }
  }
`;
