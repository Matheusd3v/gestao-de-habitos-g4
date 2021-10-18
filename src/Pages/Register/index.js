import {
  AnimationContainer,
  Background,
  Container,
  Content,
  FormContainer,
} from "./styles";
import api from "../../Services/api";
import { useHistory, Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ButtonDefault from "../../Components/ButtonDefault";

const Register = () => {
  const history = useHistory();

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
    toast.configure();

    api
      .post("https://kenzie-habits.herokuapp.com/users/", user)
      .then((response) => console.log(response.data))
      .then((_) => toast.success("Conta Criada com sucesso"))
      .then((_) => history.push("/login"))
      .catch((_) => toast.error("Usuário já existente, tente outro"));
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
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              size="small"
              color="primary"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Confirm email"
              variant="outlined"
              margin="normal"
              size="small"
              color="primary"
              {...register("emailConfirm")}
              error={!!errors.emailConfirm}
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
              error={!!errors.password}
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
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
            />
            
            <ButtonDefault>Cadastre-se</ButtonDefault>
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
