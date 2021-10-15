import React, { useState } from "react";
import Button from "../../Components/ButtonDefault";
import api from "../../Services/api";

const GroupsPage = () => {
  const [isgroups, setIsGroups] = useState(false);
  const [allGroups, setAllGroups] = useState([]);

  return (
    <>
      <h1>Grupos</h1>
      <Button onClick={() => setIsGroups(!isgroups)}>
        {isgroups ? "Ver seus grupos" : "Ver todos os grupos"}
      </Button>
      <hr />
      {isgroups ? <h3>Todos os grupos</h3> : <h3>Seus grupos</h3>}
      <hr />
      <div>
        <div>
          <p>+</p>
        </div>
        <p>Criar novo grupo</p>
      </div>

      <ul>
        {allGroups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GroupsPage;
