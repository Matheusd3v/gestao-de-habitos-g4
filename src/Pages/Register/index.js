import {
  AnimationContainer,
  Background,
  Container,
  Content,
  FormContainer,
} from "./styles";
import api from "../../Services/api";
import Button from "../../components/ButtonDefault";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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

    api
      .post("https://kenzie-habits.herokuapp.com/users/", user)
      .then((response) => console.log(response.data))
      .then((_) => toast.success("Conta Criada com sucesso"))
      .catch((err) => toast.error("Usuário já existente, tente outro"));
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>
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
            <Button>Cadastrar-se</Button>

            <p>
              Ja tem uma conta? Faça seu <Link to="/login">login</Link>
            </p>
          </FormContainer>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Register;
