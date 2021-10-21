import { Button, TextField, MenuItem } from "@material-ui/core";
import { FormCreatingHabit } from "./style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/user/index.js";
const CreatingHabitsForm = () => {
    const { newHabit, setNewHabit, addingHabit } = useContext(UserContext);
    const [currency, setCurrency] = useState("Fácil");
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
    });
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        const id = Number(localStorage.getItem("id"));
        const wholeHabit = {
        ...data,
        achieved: false,
        how_much_achieved: 0,
        user: id,
        difficulty: currency,
        };
        setNewHabit(wholeHabit);
        addingHabit(wholeHabit);
        reset();
    };
   
    return (
        <FormCreatingHabit onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="Título"
            variant="outlined"
            margin="normal"
            {...register("title")}
            helperText={errors.title?.message}
            error={!!errors.title}
            helperText={errors.title?.message}
            sx={{ width: "80%" }}
          />
          <TextField
            id="outlined-basic"
            label="Categoria"
            variant="outlined"
            margin="normal"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
            sx={{ width: "80%" }}
          />
          <TextField
            id="outlined-select-currency"
            select
            value={currency}
            label="Dificuldade do hábito"
            onChange={(e) => setCurrency(e.target.value)}
            sx={{ width: "80%", m: 2 }}
          >
            {curriencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Frequência"
            variant="outlined"
            margin="normal"
            {...register("frequency")}
            error={!!errors.frequency}
            helperText={errors.frequency?.message}
            sx={{ width: "80%" }}
          />
          <Button type="submit">Criar Hábito</Button>
          </FormCreatingHabit>
  );
}
export default CreatingHabitsForm