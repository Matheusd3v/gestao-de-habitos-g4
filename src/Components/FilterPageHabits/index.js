import React from "react";
import { ContainerFilter, OptionsFilterBtn } from "./style";
import health from "../../assets/health.svg";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import InputSearch from "../InputSearch";
const FilterHabits = ({ showMob, setShowMob }) => {
  const { userHabits, setCurrentFilterHabits } = useContext(UserContext);

  const filterAchieved = () => {
    const achieved = userHabits.filter((habit) => habit.achieved);
    setCurrentFilterHabits(achieved);
  };

  const filterInProgress = () => {
    const inProgress = userHabits.filter((habit) => !habit.achieved);
    setCurrentFilterHabits(inProgress);
  };

  const allHabits = () => {
    setCurrentFilterHabits(userHabits);
  };

  return (
    <>
      <ContainerFilter
        initial={{ opacity: 0, x: -300 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <InputSearch callback={" "} placeholder={"Procure por um hábito"} />
        <OptionsFilterBtn onClick={filterAchieved}>Alcançados</OptionsFilterBtn>
        <OptionsFilterBtn onClick={filterInProgress}>
          Em progresso
        </OptionsFilterBtn>
        <OptionsFilterBtn onClick={allHabits}>Todos</OptionsFilterBtn>

        <img src={health} alt="Heath Habit" />
      </ContainerFilter>
    </>
  );
};

export default FilterHabits;
