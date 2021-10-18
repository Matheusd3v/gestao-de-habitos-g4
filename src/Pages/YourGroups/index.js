import { useEffect, useState } from "react";
import api from "../../Services/api";
import ButtonDefault from "../../Components/ButtonDefault";
import { Link } from "react-router-dom";

const YourGroupsPages = () => {
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
    <>
      <h1>Grupos</h1>
      <ButtonDefault className="changePage">
        <Link to="/groups">Ver todos os Grupos</Link>
      </ButtonDefault>
      <hr />
      <h2>Seus grupos</h2>
      <hr />
      <div>
        <div>
          <p>+</p>
        </div>
        <p>Criar novo grupo</p>
      </div>
      <ul>
        {yourGroups.map((group) => (
          <li key={group.id}>
            <h2>{group.name}</h2>
            <section>
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
              <ButtonDefault className="button">Ver mais</ButtonDefault>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
};

export default YourGroupsPages;
