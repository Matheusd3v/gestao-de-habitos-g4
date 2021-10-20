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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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
    api
    .post(`/groups/${group.id}/subscribe/`,group.id,{
      headers: { Authorization: `Bearer ${tokenUser}` },
    })
      .then((response)=>{
        toast.success("Inscrição feita com sucesso!")
      })
      .catch((err)=>{
        toast.error("Impossível se inscrever")
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

  const getNameAndEmail = () => {
    api
    .get(`/users/${localStorage.getItem('id')}/`)
    .then((response) => {
        setName(response.data.username)
        setEmail(response.data.email)
    })
    .catch((e) => console.log(e))
  }
  const editGoal = (data) =>{
    const {id, how_much_achieved} = data
  
    const trueOrFalse = () =>{
      if(data.how_much_achieved <100){
        return false
      }
      return true
    }
    const requisitionBody = {how_much_achieved, achivied:trueOrFalse()}
    console.log(requisitionBody)
    api.
    patch(`/goals/${id}/`, requisitionBody,{
      headers: { Authorization: `Bearer ${tokenUser}` },
    })
    .then((response)=>{
      toast.success("Objetivo editado com sucesso")
    })
    
  }

  const editActivie = (activie) =>{
    console.log(activie)
    const title = activie.title
    const realization_time = "2020-03-10T15:00:00Z"
    const requisitionBody = { title, realization_time  }
    console.log(requisitionBody)
    api.
    patch(`/activities/${activie.id}/`, requisitionBody,{
      headers: { Authorization: `Bearer ${tokenUser}` },
    })
    .then((response)=>console.log(response))
    .catch((err)=>console.log(err))
  }

  const editDescription = (data) =>{
      const { description } = data
      console.log(data.id)
      api.
      patch(`/groups/${data.id}/`,{ description },{
        headers: { Authorization: `Bearer ${tokenUser}` },
      })
      .then((response)=>{
        toast.success('Descrição atualizada com sucesso')
      })
  }

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
        getNameAndEmail,
        name,
        email,
        editGoal,
        editActivie,
        editDescription
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
