import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import Modal from "../../Components/Modal";
import {
  Container,
  GroupTitle,
  GroupCategory,
  CarrouselItem,
  ActivitiesList,
  DescriptionContainer,
} from "./style";
import ButtonDefault from "../../Components/ButtonDefault";
import CarouselBase from "../../Components/Carousel";
import GoalsCard from "../../Components/GoalsCard";
import UserCard from "../../Components/UserCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import EditActivies from "../../Components/EditActivities";
import EditingDescription from "../../Components/EditingDescription";
import CreatingGoal from "../../Components/CreatingGoal";
import CreatingActivity from "../../Components/CreatingActivity";

import { UserContext } from "../../Providers/user";

const GroupDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const { getSpecificGroup, group } = useContext(UserContext);

  useEffect(() => {
    getSpecificGroup(id);
  }, [group]);

  const unsubscribe = () => {
    const token = localStorage.getItem("token");

    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then(() => {
        toast("Sucesso em sair do grupo!", {
          type: "success",
        });
        history.push("/groups/subscriptions");
      });
  };
  return (
    <>
      <GroupTitle>{group.name}</GroupTitle>
      <GroupCategory>{group.category}</GroupCategory>
      <Container>
        <h2>Objetivos</h2>

        <Modal type="add-goals">
          <CreatingGoal group={group} />
        </Modal>
        <CarouselBase>
          {group.goals?.map((item, key) => (
            <CarrouselItem key={key}>
              <GoalsCard goal={item} />
            </CarrouselItem>
          ))}
        </CarouselBase>

        <h2>Atividades</h2>
        <Modal type="add-actitivies">
          <CreatingActivity group={group} />
        </Modal>
        <ActivitiesList>
          {group.activities?.map((item, key) => (
            <li key={key} title={item.title}>
              <p>{item.title}</p>
              <Modal type="edit-pencil">
                <EditActivies acitivities={item} />
              </Modal>
            </li>
          ))}
        </ActivitiesList>

        <h2>Membros</h2>

        <CarouselBase>
          {group.users_on_group?.map((item, key) => (
            <CarrouselItem key={key}>
              <UserCard user={item} />
            </CarrouselItem>
          ))}
        </CarouselBase>

        <h2>Descrição</h2>

        <DescriptionContainer>
          <Modal type="edit-description">
            <EditingDescription group={group} />
          </Modal>
          <p>{group.description}</p>
        </DescriptionContainer>

        <div className="ButtonContainer">
          <ButtonDefault callback={unsubscribe}>Sair do Grupo</ButtonDefault>
        </div>
      </Container>
    </>
  );
};
export default GroupDetails;
