import "./style.js";
import { HomeContainer, TextContainer } from "./style.js";
import img1 from "../../assets/acceptTerms.svg";
import img2 from "../../assets/addToCart.svg";
import img3 from "../../assets/coWorking.svg";
import Button from "../../Components/ButtonDefault/index.js";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
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
          <p>Aqui você pode organizar melhor suas tarefas</p>
          <p>Crie, edite ou removas suas atividades</p>
          <p>Junte-se com seus amigos em um grupo de desenvolvimento</p>
        </TextContainer>
      </section>
      <Button>Cadastre-se</Button>
    </HomeContainer>
  );
};
export default Home;
