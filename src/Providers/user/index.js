import { createContext, useState, useEffect } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  toast.configure();
  const [currentFilterHabits, setCurrentFilterHabits] = useState([]);
  const [newHabit, setNewHabit] = useState([]);
  const [userHabits, setUserHabits] = useState([]);
  const [tokenUser, setTokenUser] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (tokenUser) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    callingHabits();
  }, [tokenUser]);

  const callingHabits = () => {
    if (tokenUser) {
      api
        .get("/habits/personal/", {
          headers: { Authorization: `Bearer ${tokenUser}` },
        })
        .then((response) => {
          setUserHabits(response.data);
          setCurrentFilterHabits(response.data);
        })
        .catch((err) => console.log(err));
    }
  };


  const subscribeGroup = (group) =>{
    console.log(group)
    api
    .post(`/groups/${group.id}/subscribe/`,group.id,{
      headers: { Authorization: `Bearer ${tokenUser}` },
    })
      .then((response)=>{
        toast.success("Inscrição feita com sucesso!")
      })
      .catch((err)=>{
        toast.error("Impossível se inscrever!")
      })
  }


  
  const logOut = () => {
    localStorage.clear();
    setTokenUser("");
  };
  const addingHabit = (wholeHabit) => {
    api
      .post("/habits/", wholeHabit, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      })
      .then((response) => {
        toast.success("Hábito cadastrado com sucesso");
        callingHabits();
      })
      .catch((e) => console.log(e));
  };

  return (
    <UserContext.Provider
      value={{
        logOut,
        tokenUser,
        setTokenUser,
        isLogin,
        userHabits,
        setUserHabits,
        callingHabits,
        currentFilterHabits,
        setCurrentFilterHabits,
        newHabit,
        setNewHabit,
        addingHabit,
        subscribeGroup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
