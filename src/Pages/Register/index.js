import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),

    email: yup.string().email("Email Inválido").required("Email obrigátório"),

    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email")], "Emails diferentes")
      .required("Confirmação de email obrigatória"),

    password: yup.string().required("Senha Obrigatória"),

    passwordConfirm: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas Diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ username, email, password }) => {
    const user = { username, email, password };

    axios
      .post("https://kenzie-habits.herokuapp.com/users/", user)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          {...register("username")}
          helperText={errors.username?.message}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          {...register("email")}
          helperText={errors.email?.message}
        />
        <TextField
          label="Confirm email"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          {...register("emailConfirm")}
          helperText={errors.emailConfirm?.message}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          type="password"
          {...register("password")}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirm password"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          type="password"
          {...register("passwordConfirm")}
          helperText={errors.passwordConfirm?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit"
        >
          Cadastrar-se
        </Button>
      </form>
    </>
  );
};

export default Register;
