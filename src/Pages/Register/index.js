import {
  AnimationContainer,
  Background,
  Container,
  Content,
  FormContainer,
} from "./styles";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit"
              style={{ marginTop: "10px" }}
            >
              Cadastrar-se
            </Button>

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
