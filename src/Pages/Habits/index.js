import "./style1.js";
import FilterHabits from "../../Components/FilterPageHabits";
import React, { useContext } from "react";
import Habit from "../../Components/Habit";
import { UserContext } from "../../Providers/user";
import { Container, HabitsContainer } from "./style1.js";
import Modal from "../../Components/Modal";
import CreatingHabitsForm from "../../Components/CreatingHabitsForm/index.jsx";
const HabitsPage = () => {
  const { callingHabits, currentFilterHabits, tokenUser } =
    useContext(UserContext);

  return (
    <Container>
      <Modal type='add'><CreatingHabitsForm/></Modal>
      <FilterHabits />
      <HabitsContainer>
        {currentFilterHabits.map((habit, index) => (
          <Habit key={index} habit={habit} />
        ))}
      </HabitsContainer>
    </Container>
  );
};

export default HabitsPage;
