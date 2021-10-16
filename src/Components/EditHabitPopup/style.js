import Popup from "reactjs-popup";
import styled from "styled-components";

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    width: 50%;
    background-color: blue;
    position: absolute;
    height: fit-content;
    display: block;
    margin: auto;
    border-radius: 10px;
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
    }
  }
`;
