import { Container } from "./style";
import femAvatar from "../../assets/femaleAvatar.svg";
import maleAvatar from "../../assets/maleAvatar.svg";
import random1 from "../../assets/random1.svg";
import random2 from "../../assets/random2.svg";
import random3 from "../../assets/random3.svg";
import { useState } from "react";
const UserCard = ({ user }) => {
  let min = 0;
  let max = 4;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  const [allAvatar] = useState([
    femAvatar,
    maleAvatar,
    random1,
    random2,
    random3,
  ]);
  const [currentAvatar] = useState(allAvatar[random]);

  return (
    <Container>
      <img src={currentAvatar} alt="User Avatar" />
      <h2>{user.username}</h2>
    </Container>
  );
};
export default UserCard;
