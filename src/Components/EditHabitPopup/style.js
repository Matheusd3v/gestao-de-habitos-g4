import Popup from "reactjs-popup";
import styled from "styled-components";

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    padding: 10px;
    width: 280px;
    background-color: #fff;
    position: absolute;
    height: fit-content;
    display: block;

    margin: auto;
    border-radius: 10px;

    @media (min-width: 500px) {
      margin: auto;

      width: 400px;
    }
  }
  // use your custom style for ".popup-content"
  &-content {
    .modal > .header {
      width: 100%;
      border-bottom: 1px solid gray;
      font-size: 18px;
      text-align: center;
      padding: 5px;
    }
    .modal > .content {
      width: 100%;
      padding: 10px 5px;
    }

    .modal > .actions {
      width: 100%;
      padding: 10px 5px;
      margin: auto;
      text-align: center;
    }
    .modal > .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
      margin-top: 5px;
      margin-right: 15px;
    }
  }
`;
export const EditHabitForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-size: 16px;
    height: 35px;
    padding: 0;
  }

  @media (min-width: 750px) {
    button {
      font-size: 24px;
      height: 70px;
      padding: 0;
    }
  }
`;
