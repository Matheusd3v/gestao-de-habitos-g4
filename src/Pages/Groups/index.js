import { Container, ContainerList, NewGroup, SectionInfo } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/ButtonDefault";
import React from "react";
import CreatingHabitsForm from "../../Components/CreatingHabitsForm";
import Modal from "../../Components/Modal";

const GroupsPage = () => {
  const [allGroups, setAllGroups] = useState([]);
  const [nextAllGroups, setNextAllGroups] = useState(
    "https://kenzie-habits.herokuapp.com/groups/"
  );

  useEffect(() => {
    fetch(nextAllGroups)
      .then((response) => response.json())
      .then((response) => setAllGroups([...allGroups, response.results]))
      .catch((err) => console.log(err));
  }, [nextAllGroups]);

  useEffect(() => {
    fetch(nextAllGroups)
      .then((response) => response.json())
      .then((response) =>
        response.next ? setNextAllGroups(response.next) : null
      )
      .catch((err) => console.log(err));
  }, [nextAllGroups]);

  return (
    <Container>
      <h1>Grupos</h1>
      <Button className="changePage">
        <Link to="/groups/subscriptions">Ver seus Grupos</Link>
      </Button>
      <hr />
      <h2>Todos os grupos</h2>
      <hr />
      <NewGroup>
        <div>
          <p>+</p>
        </div>
        <p>Criar novo grupo</p>
      </NewGroup>

      {console.log(allGroups)}

      <ContainerList>
        {allGroups.map((page) =>
          page.map((group) => (
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

                <Button className="button">Ver mais</Button>
              </SectionInfo>
            </li>
          ))
        )}
      </ContainerList>
    </Container>
  );
};

export default GroupsPage;
