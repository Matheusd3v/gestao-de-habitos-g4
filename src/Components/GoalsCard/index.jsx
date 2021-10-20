import { CardContainer } from "./style";
import ProgressBarMobile from "../../Components/ProgressBar";
import EditGoal from "../EditGoals";
import Modal from '../Modal'
const GoalsCard = ({ goal }) => {
  return (
    <>
      <CardContainer>
        <div>
          <h2>{goal.title}</h2>
          <p>Dificuldade: {goal.difficulty}</p>
          <Modal type='edit'><EditGoal goal={goal}/></Modal>
        </div>
        <ProgressBarMobile percentage={goal.how_much_achieved} />
      </CardContainer>
    </>
  );
};
export default GoalsCard;
