import { StyledPopup, EditHabitForm } from "./style";
import { useState, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, MenuItem, Slider } from "@material-ui/core";
import ButtonDefault from "../ButtonDefault";
import api from "../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Providers/user";
import { useHistory } from "react-router";
import { IoPencil } from "react-icons/io5";

const EditHabitPopup = ({ habit, version }) => {
  const history = useHistory();
  const { callingHabits } = useContext(UserContext);
  toast.configure();
  const { category, difficulty, frequency, how_much_achieved, id, title } =
    habit;
  const [currency, setCurrency] = useState(difficulty);
  const [setRadiusValue] = useState(how_much_achieved);

  const curriencies = [
    {
      value: "Fácil",
      label: "Fácil",
    },
    {
      value: "Intermediário",
      label: "Intermediário",
    },
    {
      value: "Dificil",
      label: "Dificil",
    },
  ];

  const schema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    frequency: yup.string().required("Frequência obrigatória"),
    how_much_achieved: yup.number(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ title, category, frequency, how_much_achieved }) => {
    const token = localStorage.getItem("token");
    const data = {
      title,
      category,
      difficulty: currency,
      frequency,
      achieved: how_much_achieved === 100 ? true : false,
      how_much_achieved,
    };
    api
      .patch(`/habits/${id}/`, data, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then(() => {
        callingHabits();
        history.push({ pathname: "/empty" });
        history.replace({ pathname: "/habits" });
        toast("Hábito editado !", {
          type: "success",
        });
      })
      .catch(() => {
        toast("Falha ao Editar hábito", {
          type: "error",
        });
      });
  };

  const deleteHabit = () => {
    const token = localStorage.getItem("token");
    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then(() => {
        callingHabits();
        history.push({ pathname: "/empty" });
        history.replace({ pathname: "/habits" });
        toast("Hábito deletado !", {
          type: "success",
        });
      })
      .catch(() => {
        toast("Falha ao deletar hábito", {
          type: "error",
        });
      });
  };

  return (
    <StyledPopup
      trigger={
        version === "desktop" ? (
          <button className="button"> Editar hábito </button>
        ) : (
          <button className="pencil">
            <IoPencil />
          </button>
        )
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Editar Hábito </div>
          <div className="content">
            <EditHabitForm onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-basic"
                label="Título"
                variant="outlined"
                margin="normal"
                defaultValue={title}
                {...register("title")}
                helperText={errors.title?.message}
              />
              <TextField
                id="outlined-basic"
                label="Categoria"
                variant="outlined"
                margin="normal"
                defaultValue={category}
                {...register("category")}
                helperText={errors.category?.message}
              />
              <TextField
                id="outlined-basic"
                label="Frequência"
                variant="outlined"
                margin="normal"
                defaultValue={frequency}
                {...register("frequency")}
                helperText={errors.frequency?.message}
              />
              <TextField
                select
                value={currency}
                label="Dificuldade do hábito"
                onChange={(e) => setCurrency(e.target.value)}
                sx={{ width: "230px", m: 2 }}
              >
                {curriencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Slider
                key="slider"
                defaultValue={habit.how_much_achieved}
                onChange={(e) => setRadiusValue(e.target.value)}
                aria-label="Default"
                valueLabelDisplay="auto"
                {...register("how_much_achieved")}
              />

              <ButtonDefault type="submit" className="button">
                Salvar alterações
              </ButtonDefault>
              <ButtonDefault
                type="button"
                callback={deleteHabit}
                className="button"
              >
                Excluir Hábito
              </ButtonDefault>
            </EditHabitForm>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};
export default EditHabitPopup;
