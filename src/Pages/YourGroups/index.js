import { Container, ContainerList, NewGroup, SectionInfo } from "./styles";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import ButtonDefault from "../../Components/ButtonDefault";
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import BtnDefaultSecondary from "../../Components/BtnDefaultSecondary";
import { Modal } from "antd";
import { FormCreatingHabit } from "../../Components/CreatingHabitsForm/style";

const YourGroupsPages = () => {
  const history = useHistory();
  const [yourGroups, setYourGroups] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then((response) => setYourGroups(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1>Grupos</h1>
      <hr />
      <h2>Seus grupos</h2>
      <hr />

      <ContainerList>
        {yourGroups.map((group) => (
          <motion.li key={group.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
            <h2>{group.name}</h2>
            <SectionInfo>
              <div>
                <h3>Objetivos</h3>
                <div className='backgroundDesc'>
                  <p>{group.goals[0]?.title} </p>
                </div>
              </div>
              <div>
                <h3>Atividades</h3>
                <div className='backgroundDesc'>
                <p> {group.activities[0]?.title} </p>
                </div>
              </div>
              <div>
                <h3>Descrição</h3>
                <div className='backgroundDesc'>
                  <p> {group.description} </p>
                </div>
              </div>
              <ButtonDefault
                callback={() => history.push(`/groups/${group.id}`)}
                className="button"
              >
                Ver mais
              </ButtonDefault>
            </SectionInfo>
          </motion.li>
        ))}
      </ContainerList>
    </Container>
  );
};

export default YourGroupsPages;
