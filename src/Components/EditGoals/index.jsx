
import { Container } from "./style";
import { Slider } from "@material-ui/core";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/user";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { GroupContext } from "../../Providers/groups";

const EditGoal = ({ goal }) => {
  const { editGoal } = useContext(UserContext);
  const [achiviedPercentage, setAchiviedPercentage] = useState(
    goal.how_much_achieved
  );
  const token = localStorage.getItem("token");
  const { callingGroups } = useContext(GroupContext)
  const { register, handleSubmit } = useForm();

  const deleteGoal = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then((_) => toast.success("Sucesso em exculir meta!"))
      .catch((_) => toast.error("Meta não existente!"));
  };

  const onSubmit = (data) => {
    const id = goal.id;
    const how_much_achieved = Number(data.how_much_achieved);
    const idAndAchivied = { how_much_achieved, id };
    editGoal(idAndAchivied);
    callingGroups()
  };

  const deleteGoals = () => {
    deleteGoal(goal.id)
    callingGroups()
  }

  return (
    <Container>
      <h1>{goal.title}</h1>
      <h2>Quantos porcento dessa meta foi concluída ?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Slider
          key="slider"
          defaultValue={goal.how_much_achieved}
          onChange={(e) => setAchiviedPercentage(e.target.value)}
          aria-label="Default"
          valueLabelDisplay="auto"
          {...register("how_much_achieved")}
        />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={deleteGoals}>Excluir</button>
    </Container>
  );
};
export default EditGoal;

