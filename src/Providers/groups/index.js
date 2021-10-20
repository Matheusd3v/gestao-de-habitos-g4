import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services/api";
import { UserContext } from "../user";
import { toast } from "react-toastify";
export const GroupContext = createContext();

export const GroupProvider = ({children}) => {
    toast.configure();
    const [group, setGroup] = useState({})
    const [idGroup, setIdGroup] = useState('')

    
    const callingGroups = () => {
       
        api
        .get(`/groups/${idGroup}/`)
        .then((response) => {
            setGroup(response.data);
        })
        .catch((error) => console.log(error));
    }

    const creatingActivitie = (data) => {
        const { title, id } = data;
        const requisitionBody = {
          title,
          realization_time: "2020-03-10T15:00:00Z",
          group: id,
        };
        console.log(requisitionBody);
        api
          .post("/activities/", requisitionBody, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          .then((response) => {
            toast.success("Atividade adicionada com sucesso");
          })
          
      };

      const editActivie = (activie) => {
        console.log(activie);
        const title = activie.title;
        const realization_time = "2020-03-10T15:00:00Z";
        const requisitionBody = { title, realization_time };
        console.log(requisitionBody);
        api
          .patch(`/activities/${activie.id}/`, requisitionBody, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      };


      const editDescription = (data) => {
        const { description } = data;
        console.log({description: description});
        api
          .patch(
            `/groups/${data.id}/`,
            { description: description},
            {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            }
          )
          .then((response) => {
            toast.success("Descrição atualizada com sucesso");
          })
          .catch((e) => {
            toast.warn("Somente o dono pode alterar a descrição!");
          })
      };

    return (
        <GroupContext.Provider  value={{group, setGroup, editActivie , creatingActivitie, idGroup, setIdGroup, callingGroups, editDescription}} >
            {children}
        </GroupContext.Provider>
    )
}