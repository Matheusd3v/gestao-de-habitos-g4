import "./style1.js";
import FilterHabits from "../../Components/FilterPageHabits";
import React, { useContext, useState } from "react";
import Habit from "../../Components/Habit";
import { UserContext } from "../../Providers/user";
import { Container, HabitsContainer } from "./style1.js";
import Modal from "../../Components/Modal";
import CreatingHabitsForm from "../../Components/CreatingHabitsForm/index.jsx";
import { FilterBtn } from "../../Components/FilterPageHabits/style.js";
import { AiFillFilter } from "react-icons/ai";

const HabitsPage = () => {
  const { callingHabits, currentFilterHabits, tokenUser } = useContext(UserContext);
  const [showMob, setShowMob] = useState(false)

  const pushAndPull = () => {
    setShowMob(!showMob)
  }

  return (
    <Container>
      <Modal type='add'><CreatingHabitsForm/></Modal>

      <FilterBtn variant='outlined' onClick={pushAndPull}>Filtrar <AiFillFilter/> </FilterBtn>

      <span className='desktop'><FilterHabits/></span>

      {showMob && <span className='mobile'><FilterHabits showMob={showMob} setShowMob={setShowMob}/></span>}
      
      <HabitsContainer>
        {currentFilterHabits.map((habit, index) => (
          <Habit key={index} habit={habit} />
        ))}
      </HabitsContainer>
    </Container>
  );
};

export default HabitsPage;
