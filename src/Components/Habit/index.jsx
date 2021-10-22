import "./style.js";
import { HabitContainerDesktop, HabitContainerMobile } from "./style.js";
import ProgressBarMobile from "../ProgressBar";
import ProgressBar from "@ramonak/react-progress-bar";
import EditHabitPopup from "../EditHabitPopup";
const Habit = ({ habit }) => {
  const title = habit.title;
  const description = habit.category;
  const percentage = habit.how_much_achieved;
  return (
    <>
      <HabitContainerDesktop
        initial={{ opacity: 0}}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 1.2 }}
      >
        <h1>{title}</h1>
        <span className="backWhite">
          <p>
            <b>Categoria:</b> {description}
          </p>

          {percentage === 100 ? (
            <p>
              <b>Status:</b> Concluído
            </p>
          ) : (
            <p>
              <b>Status:</b> Não concluído
            </p>
          )}
        </span>
        <ProgressBar
          completed={percentage}
          bgColor="#FF715B"
          width="230px"
          labelAlignment="right"
          labelColor="black"
        />

      <EditHabitPopup habit={habit} version={"desktop"} />
      </HabitContainerDesktop>

      <HabitContainerMobile
        initial={{ opacity: 0}}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1.2 }}
      >
        <ProgressBarMobile percentage={percentage} />
        <div className="content">
          <h3>{title}</h3>
          <p>
            <b>Categoria</b>: {description}
          </p>
          {percentage === 100 ? (
            <p>
              <b>Status</b>: Concluído
            </p>
          ) : (
            <p>
              <b>Status</b>: Não concluído
            </p>
          )}
        </div>{" "}
        <EditHabitPopup habit={habit} version={"mobile"} />
      </HabitContainerMobile>
    </>
  );
};

export default Habit;
