import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  svg {
    font-size: 30px;
  }

  .mobile {
    display: none;
  }

  .btnMobile {
    display: none;
  }

  .add-button {
    cursor: pointer;
    position: fixed;
    right: 5px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .desktop {
      display: none;
    }

    .btnMobile {
      display: block;
    }

    .mobile {
      display: block;
      position: absolute;
      top: 30px;
    }
  }
`;
export const HabitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 1100px;
  padding: 45px 0;
  padding-left: 60px;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    width: 100%;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;
