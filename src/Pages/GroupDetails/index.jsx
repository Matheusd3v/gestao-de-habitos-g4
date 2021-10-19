import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import {
  Container,
  GroupTitle,
  GroupCategory,
  CarrouselItem,
  ActivitiesList,
} from "./style";
import CarouselBase from "../../Components/Carousel";
import GoalsCard from "../../Components/GoalsCard";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState({});
  useEffect(() => {
    api
      .get(`/groups/${id}/`)
      .then((response) => {
        setGroup(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
          {group.activities?.map((item) => {
            return <li title={item.title}>{item.title}</li>;
          })}
        </ActivitiesList>
      </Container>
    </>
  );
};
export default GroupDetails;
