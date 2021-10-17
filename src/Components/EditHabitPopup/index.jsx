import { StyledPopup, EditHabitForm } from "./style";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, MenuItem, Slider } from "@material-ui/core";
import ButtonDefault from "../ButtonDefault";

const EditHabitPopup = ({ habit }) => {
  const {
    achieved,
    category,
    difficulty,
    frequency,
    how_much_achieved,
    id,
    title,
  } = habit;
  const [currency, setCurrency] = useState(difficulty);

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
    const data = {
      title,
      category,
      frequency,
      how_much_achieved,
      difficulty: currency,
      user: JSON.parse(localStorage.getItem("id")),
    };
    console.log(data);
  };

  return (
    <StyledPopup
      trigger={<button className="button"> Open Modal </button>}
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
                defaultValue={how_much_achieved}
                aria-label="Default"
                valueLabelDisplay="auto"
                {...register("how_much_achieved")}
              />
              <ButtonDefault type="submit">Editar Hábito</ButtonDefault>
            </EditHabitForm>
          </div>
          <div className="actions"></div>
        </div>
      )}
    </StyledPopup>
  );
};
export default EditHabitPopup;
