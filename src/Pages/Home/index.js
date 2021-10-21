import "./style.js";
import { HomeContainer, TextContainer } from "./style.js";
import img2 from "../../assets/addToCart.svg";
import ButtonDefault from "../../Components/ButtonDefault/index.js";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const redirectToRegister = () => {
    history.push("/register");
  };
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1 }}
    >
      <section className="info-container">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          src={img2}
          alt="img-teste"
        />

        <TextContainer>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            src={img2}
            alt="img-teste"
          >
            Aqui você pode organizar melhor suas tarefas. Para isso crie, edite
            ou remova suas atividades e junte-se aos seus amigos em um grupo de
            desenvolvimento.
          </motion.p>
        </TextContainer>
      </section>
      <ButtonDefault animation={true} callback={redirectToRegister}>
        Cadastre-se
      </ButtonDefault>
    </HomeContainer>
  );
};
export default Home;
