import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormGroupCreate } from "./style";
import ButtonDefault from "../ButtonDefault";
import api from "../../Services/api";
import { UserContext } from "../../Providers/user";
import { toast } from "react-toastify";

const FormCrateGroups = () => {
  const { tokenUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      })
      .then(
        toast("Grupo criado com sucesso!", {
          type: "success",
        })
      )
      .catch((e) => console.log(e));

    reset();
  };

  return (
    <>
      <FormGroupCreate
        onSubmit={handleSubmit(onSubmitFunction)}
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
      >
        <h2>Cadastre Novos Grupos</h2>

        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Descrição"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <TextField
          label="Categoria"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("category")}
          error={!!errors.category}
          helperText={errors.category?.message}
        />

        <ButtonDefault> Cadastrar </ButtonDefault>
      </FormGroupCreate>
    </>
  );
};

export default FormCrateGroups;
