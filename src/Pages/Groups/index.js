import React, { useEffect, useState } from "react";
import Button from "../../Components/ButtonDefault";
import api from "../../Services/api";

const GroupsPage = () => {
  const [isGroups, setIsGroups] = useState(false);
  const [allGroups, setAllGroups] = useState([]);
  const [nextYourGroups, setNextYourGroups] = useState([]);
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
      <Button onClick={() => setIsGroups(!isGroups)}>
        {isGroups ? "Ver seus grupos" : "Ver todos os grupos"}
      </Button>
      <hr />
      {isGroups ? <h3>Todos os grupos</h3> : <h3>Seus grupos</h3>}
      <hr />
      <div>
        <div>
          <p>+</p>
        </div>
        <p>Criar novo grupo</p>
      </div>

      {isGroups ? (
        <ul>
          {allGroups.map((page) =>
            page.map((group) => <li key={group.id}>{group.name}</li>)
          )}
        </ul>
      ) : null}
    </>
  );
};

export default GroupsPage;
