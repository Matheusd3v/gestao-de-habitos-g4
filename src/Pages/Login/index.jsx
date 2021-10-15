import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormContainer } from "./style";
import loginImage from "../../assets/login.svg";

const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Username Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <img src={loginImage} alt="login representation" />
      <FormContainer>
        <h2>Faça seu Login e comece seu dia de forma produtiva !</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            required
            label="Usuário"
            size="small"
            {...register("username")}
          />
          <TextField
            required
            label="Senha"
            type="password"
            size="small"
            {...register("password")}
          />
          <button type="submit">Logar</button>
        </form>{" "}
      </FormContainer>
    </Container>
  );
};
export default Login;
