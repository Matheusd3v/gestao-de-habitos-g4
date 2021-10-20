import { CardContainer } from "./style";
import ProgressBarMobile from "../../Components/ProgressBar";

const GoalsCard = ({ goal }) => {
  return (
    <>
      <CardContainer>
        <div>
          <h2>{goal.title}</h2>
          <p>Dificuldade: {goal.difficulty}</p>
        </div>
        <ProgressBarMobile percentage={goal.how_much_achieved} />
      </CardContainer>
    </>
  );
};
export default GoalsCard;
