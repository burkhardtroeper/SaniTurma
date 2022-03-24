import { useReducer, useContext } from "react";
import UserContext from "./user-context";
// import DiseasesContext from "../store/diseases-context";

const defaultUserState = {
    diseaseSelected: 0, 
    team: [],
    notes: [],
    appointments: [],
};

const userReducer = (state, action) => {
    
    if (action.type === 'SELECTDISEASE') {
        const updatedDisease = action.disease;
        return {
            diseaseSelected: updatedDisease
        }
    }

    if (action.type === 'ADDTEAMMEMBER') {

    }

    if (action.type === 'REMOVETEAMMEMBER') {

    }

    if (action.type === 'ADDNOTE') {

    }

    if (action.type === 'REMOVENOTE') {

    }

    if (action.type === 'ADDAPPOINTMENT') {

    }

    if (action.type === 'REMOVEAPPOINTMENT') {

    }

}

const UserProvider = (props) => {
    
    const [userState, dispatchUserAction] = useReducer(userReducer, defaultUserState);

    const selectDisease = (number) => {               
        dispatchUserAction({type: 'SELECTDISEASE', disease: number});
    }

    const addTeamMember = (number) => {
        dispatchUserAction({type: 'ADDTEAMMEMBER', number: number});
    }

    const removeTeamMember = (number) => {
        dispatchUserAction({type: 'REMOVETEAMMEMBER', number: number});
    }

    const addNote = (number) => {
        dispatchUserAction({type: 'ADDNOTE', number: number});
    }

    const removeNote = (number) => {
        dispatchUserAction({type: 'REMOVENOTE', number: number});
    }

    const addAppointment = (number) => {
        dispatchUserAction({type: 'ADDAPPOINTMENT', number: number});
    }

    const removeAppointment = (number) => {
        dispatchUserAction({type: 'REMOVEAPPOINTMENT', number: number});
    }


    const userContext = {

        diseaseSelected: userState.diseaseSelected,
        team: userState.team,
        notes: userState.notes,
        appointments: userState.appointments,
        selectDisease: selectDisease,  
        addTeamMember: addTeamMember ,
        removeTeamMember: removeTeamMember,
        addNote: addNote,
        removeNote: removeNote,
        addAppointment: addAppointment,
        removeAppointment: removeAppointment,  
    };
    
    return (
        <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>
    )

}

export default UserProvider