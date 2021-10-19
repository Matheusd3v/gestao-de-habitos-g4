import { CardContainer } from "./style";
import ProgressBarMobile from "../../Components/ProgressBar";

const GoalsCard = ({ goal }) => {
  return (
    <>
      <CardContainer>
        <ProgressBarMobile percentage={goal.how_much_achieved} />
        <div>
          <h2>{goal.title}</h2>
          <p>Dificuldade: {goal.difficulty}</p>
        </div>
      </CardContainer>
    </>
  );
};
export default GoalsCard;
