import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = yup.object().shape({
    user: yup.string().required("Nome de usuário obrigatório"),

    email: yup.string().email("Email Inválido").required("Email obrigátório"),

    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email")], "Emails diferentes")
      .required("Confirmação de email obrigatória"),

    password: yup.string().required("Senha Obrigatória"),

    passwordConfirm: yup.string
      .apply()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Confirmação de senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          {...register("user")}
          helperText={errors.user?.message}
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
          {...register("passworConfirm")}
          helperText={errors.passwordConfirm?.message}
        />
        <button>Cadastrar-se</button>
      </form>
    </>
  );
};

export default Register;
