import Popup from "reactjs-popup";
import { StyledPopup } from "./style";

const EditHabitPopup = () => {
  return (
    <StyledPopup
      trigger={<button className="button"> Open Modal </button>}
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Editar Hábito </div>
          <div className="content"></div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};
export default EditHabitPopup;
