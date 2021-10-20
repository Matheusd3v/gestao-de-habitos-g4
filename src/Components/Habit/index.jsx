import "./style1.js";
import { HabitContainerDesktop, HabitContainerMobile } from "./style1.js";
import ButtonDefault from "../ButtonDefault/index.js";
import ProgressBarMobile from "../ProgressBar";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoPencil } from "react-icons/io5";
import EditHabitPopup from "../EditHabitPopup";
const Habit = ({ habit }) => {
  const title = habit.title;
  const description = habit.category;
  const percentage = habit.how_much_achieved;
  return (
    <>
      <HabitContainerDesktop>
        <h1>{title}</h1>
        <p>{description}</p>
        {percentage === 100 ? <p>Concluído</p> : <p>Não concluído</p>}

        <ProgressBar
          completed={percentage}
          bgColor="#ffff"
          width="150px"
          labelAlignment="right"
          labelColor="black"
        />
        
        <EditHabitPopup habit={habit} version={"desktop"} />
      </HabitContainerDesktop>

      <HabitContainerMobile>
        <ProgressBarMobile percentage={percentage} />
        <p>{description}</p>
        {percentage === 100 ? <p>Concluído</p> : <p>Não concluído</p>}
        <EditHabitPopup habit={habit} version={"mobile"} />
      </HabitContainerMobile>
    </>
  );
};

export default Habit;
