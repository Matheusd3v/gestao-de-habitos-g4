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
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { motion } from "framer-motion";
const Login = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup.string().required("Username Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { setTokenUser } = useContext(UserContext);

  const onSubmitFunction = (data) => {
    toast.configure();
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const decoded = jwtDecode(token);
        window.localStorage.clear();
        window.localStorage.setItem("token", JSON.stringify(token));
        window.localStorage.setItem("id", JSON.stringify(decoded.user_id));
        history.push("/habits");
        setTokenUser(token);
      })
      .catch((err) => {
        toast("Senha ou Login errados", {
          type: "error",
        });
      });
  };
  return (
    <Container>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 2 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
        }}
        src={loginImage}
        alt="login representation"
      />
      <FormContainer
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 2 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
        }}
      >
        <h2>Faça seu Login e comece seu dia de forma produtiva !</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            label="Username"
            variant="outlined"
            size="small"
            color="primary"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <ButtonDefault type="submit">Logar</ButtonDefault>
        </form>{" "}
      </FormContainer>
    </Container>
  );
};
export default Login;
