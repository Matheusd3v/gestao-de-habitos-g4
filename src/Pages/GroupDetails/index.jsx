import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import { IoIosAdd } from "react-icons/io"
import Modal from '../../Components/Modal'
import {
  Container,
  GroupTitle,
  GroupCategory,
  CarrouselItem,
  ActivitiesList,
  CreateSomething
} from "./style";
import CarouselBase from "../../Components/Carousel";
import GoalsCard from "../../Components/GoalsCard";
import EditGoal from "../../Components/EditGoals";
import EditActivies from "../../Components/EditActivities";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState({});
  useEffect(() => {
    api
      .get(`/groups/${id}/`)
      .then((response) => {
        setGroup(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(group.activities)
  return (
    <>
      <GroupTitle>{group.name}</GroupTitle>
      <GroupCategory>{group.category}</GroupCategory>
      <Container>
        <h2>Objetivos</h2>
        
        <CarouselBase>
          {group.goals?.map((item, key) => (
            <CarrouselItem key={key}>
              <GoalsCard goal={item} />
            </CarrouselItem>
          ))}
        </CarouselBase>
        <h2>Atividades</h2>
        <ActivitiesList>
          {group.activities?.map((item, key) => 
          (
             <li key={key}title={item.title}>
               <p>{ item.title }</p>
               <Modal type='edit-pencil'><EditActivies acitivities={item}/></Modal>
               </li>
          ) 
          )}
        </ActivitiesList>
      </Container>
    </>
  );
};
export default GroupDetails;
