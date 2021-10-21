import { Container, ContainerList, NewGroup, SectionInfo } from "./styles";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import ButtonDefault from "../../Components/ButtonDefault";
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
          <li key={group.id}>
            <h2>{group.name}</h2>
            <SectionInfo>
              <div>
                <h3>Objetivos</h3>
                <p>{group.goals[0]?.title} </p>
              </div>
              <div>
                <h3>Atividades</h3>
                <p> {group.activities[0]?.title} </p>
              </div>
              <div>
                <h3>Descrição</h3>
                <p> {group.description} </p>
              </div>
              <ButtonDefault
                callback={() => history.push(`/groups/${group.id}`)}
                className="button"
              >
                Ver mais
              </ButtonDefault>
            </SectionInfo>
          </li>
        ))}
      </ContainerList>
    </Container>
  );
};

export default YourGroupsPages;
