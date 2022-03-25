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
        console.log('in UserProvider, userReducer');
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

};

const UserProvider = (props) => {
    
    const [userState, dispatchUserAction] = useReducer(userReducer, defaultUserState);

    const selectDiseaseHandler = (number) => {               
        console.log('in UserProvider, selectDisease');
        dispatchUserAction({type: 'SELECTDISEASE', disease: number});
    }

    const addTeamMemberHandler = (number) => {
        dispatchUserAction({type: 'ADDTEAMMEMBER', number: number});
    }

    const removeTeamMemberHandler = (number) => {
        dispatchUserAction({type: 'REMOVETEAMMEMBER', number: number});
    }

    const addNoteHandler = (number) => {
        dispatchUserAction({type: 'ADDNOTE', number: number});
    }

    const removeNoteHandler = (number) => {
        dispatchUserAction({type: 'REMOVENOTE', number: number});
    }

    const addAppointmentHandler = (number) => {
        dispatchUserAction({type: 'ADDAPPOINTMENT', number: number});
    }

    const removeAppointmentHandler = (number) => {
        dispatchUserAction({type: 'REMOVEAPPOINTMENT', number: number});
    }


    const userContext = {

        diseaseSelected: userState.diseaseSelected,
        team: userState.team,
        notes: userState.notes,
        appointments: userState.appointments,
        selectDisease: selectDiseaseHandler,  
        addTeamMember: addTeamMemberHandler,
        removeTeamMember: removeTeamMemberHandler,
        addNote: addNoteHandler,
        removeNote: removeNoteHandler,
        addAppointment: addAppointmentHandler,
        removeAppointment: removeAppointmentHandler,  
    };
    
    return (
        <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>
    );

};

export default UserProvider