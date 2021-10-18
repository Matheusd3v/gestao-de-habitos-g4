import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/ButtonDefault";

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
    <>
      <h1>Grupos</h1>
      <Button>
        <Link to="/groups/subscriptions">Ver seus Grupos</Link>
      </Button>
      <hr />
      <h3>Todos os grupos</h3>
      <hr />
      <div>
        <div>
          <p>+</p>
        </div>
        <p>Criar novo grupo</p>
      </div>

      {console.log(allGroups)}

      <ul>
        {allGroups.map((page) =>
          page.map((group) => (
            <li key={group.id}>
              <h2>{group.name}</h2>
              <p> Objetivos: {group.goals[0]?.title} </p>
              <p> Atividades: {group.activities[0]?.title} </p>
              <p> Descrição: {group.description} </p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default GroupsPage;
