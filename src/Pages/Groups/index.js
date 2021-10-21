import { Container, ContainerList, SectionInfo } from "./styles";
import { useEffect, useState } from "react";
import React from "react";
import Modal from "../../Components/Modal";
import GroupDetails from "../../Components/GroupDetails";
import FormCrateGroups from "../../Components/FormCreateGroup";
import { motion } from "framer-motion";

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
      <hr />
      <h2>Todos os grupos</h2>
      <hr />
      <Modal type="createForm">
        <FormCrateGroups />{" "}
      </Modal>
      <ContainerList>
        {allGroups.map((page) =>
          page.map((group) => (
            <motion.li
              key={group.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h2>{group.name}</h2>
              <SectionInfo>
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
                  <div className="backgroundDesc">
                    <p> {group.description} </p>
                  </div>
                </div>

                <Modal key={group.id} type="seeMore">
                  <GroupDetails group={group} />
                </Modal>
              </SectionInfo>
            </motion.li>
          ))
        )}
      </ContainerList>
    </Container>
  );
};

export default GroupsPage;
