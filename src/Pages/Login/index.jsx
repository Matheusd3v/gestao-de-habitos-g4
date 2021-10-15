import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormContainer } from "./style";
import loginImage from "../../assets/login.svg";
import ButtonDefault from "../../Components/ButtonDefault";
import api from "../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory()
  const formSchema = yup.object().shape({
    username: yup.string().required("Username Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    toast.configure()
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        window.localStorage.clear();
        window.localStorage.setItem("token", JSON.stringify(token));
        toast("Bem vindo ao gestão de hábitos", {
          type: "success",
        });
        console.log('aaa')
        history.push('/habits')
      })
      .catch((err) => {
        toast("Senha ou Login errados", {
          type: "error",
        });
      });
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
          <ButtonDefault type="submit">Logar</ButtonDefault>
        </form>{" "}
      </FormContainer>
    </Container>
  );
};
export default Login;
