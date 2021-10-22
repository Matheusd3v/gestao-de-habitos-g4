import { Container, ContainerList, SectionInfo } from "./styles";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import ButtonDefault from "../../Components/ButtonDefault";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

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
      <h2 className="pageTitle">Seus grupos</h2>

      <ContainerList>
        {yourGroups.map((group) => (
          <motion.li
            key={group.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SectionInfo>
              <h2>{group.name}</h2>

              <div>
                <h3>Objetivos</h3>
                <div className="backgroundDesc">
                  <p>{group.goals[0]?.title} </p>
                </div>
              </div>
              <div>
                <h3>Atividades</h3>
                <div className="backgroundDesc">
                  <p> {group.activities[0]?.title} </p>
                </div>
              </div>
              <div>
                <h3>Descrição</h3>
                <div className="backgroundDesc description">
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
