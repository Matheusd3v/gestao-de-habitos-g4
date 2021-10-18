import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import { Container } from "./style";
const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState({});
  api
    .get(`/groups/${id}`)
    .then((response) => setGroup(response.data))
    .catch((error) => console.log(error));
  return <Container>{group.name}</Container>;
};
export default GroupDetails;
