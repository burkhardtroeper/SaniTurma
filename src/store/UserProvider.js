import { useReducer } from "react";
import UserContext from "./user-context";
// import DiseasesContext from "../store/diseases-context";
import HealthTeamContext from "./healthteam-context";

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

        const newTeamMember = HealthTeamContext.healthWorkers.map(healthWorker => {

            return healthWorker.id === action.id;

        });   

        return {
            diseaseSelected: state.diseaseSelected,
            team: [...state.team, newTeamMember],
            notes: state.notes,
            appointments: state.appointments
        }


    }

    if (action.type === 'REMOVETEAMMEMBER') {

        const toRemoveTeamMemberIndex = state.team.findIndex(teamMember => {

            return teamMember.id === action.id;

        });

        const updatedTeamMembers = state.team.slice(0, toRemoveTeamMemberIndex).concat(state.team.slice(toRemoveTeamMemberIndex + 1));

        return {
            diseaseSelected: state.diseaseSelected,
            team: updatedTeamMembers,
            notes: state.notes,
            appointments: state.appointments
        }


    }

    if (action.type === 'ADDNOTE') {

        return {
            diseaseSelected: state.diseaseSelected,
            team: state.team,
            notes: [...state.notes, action.note],
            appointments: state.appointments
        }

    }

    if (action.type === 'REMOVENOTE') {

        const toRemoveNoteIndex = state.notes.findIndex(note => {

            return note.id === action.id;

        });

        const updatedNotes = state.notes.slice(0, toRemoveNoteIndex).concat(state.notes.slice(toRemoveNoteIndex + 1));

        return {
            diseaseSelected: state.diseaseSelected,
            team: state.team,
            notes: updatedNotes,
            appointments: state.appointments
        }

    }

    if (action.type === 'ADDAPPOINTMENT') {

        return {
            diseaseSelected: state.diseaseSelected,
            team: state.team,
            notes: state.notes,
            appointments: [...state.appointments, action.appointment]
        }

    }

    if (action.type === 'REMOVEAPPOINTMENT') {

        const toRemoveAppointmentIndex = state.appointments.findIndex(appointment => {

            return appointment.id === action.id;

        });

        const updatedAppointments = state.appointments.slice(0, toRemoveAppointmentIndex).concat(state.appointments.slice(toRemoveAppointmentIndex + 1));

        return {
            diseaseSelected: state.diseaseSelected,
            team: state.team,
            notes: state.notes,
            appointments: updatedAppointments
        }

    }

};

const UserProvider = (props) => {
    
    const [userState, dispatchUserAction] = useReducer(userReducer, defaultUserState);

    const selectDiseaseHandler = (number) => {               
        console.log('in UserProvider, selectDisease');
        dispatchUserAction({type: 'SELECTDISEASE', disease: number});
    }

    const addTeamMemberHandler = (id) => {
        dispatchUserAction({type: 'ADDTEAMMEMBER', id: id});
    }

    const removeTeamMemberHandler = (number) => {
        dispatchUserAction({type: 'REMOVETEAMMEMBER', number: number});
    }

    const addNoteHandler = (note) => {
        dispatchUserAction({type: 'ADDNOTE', number: note});
    }

    const removeNoteHandler = (id) => {
        dispatchUserAction({type: 'REMOVENOTE', id: id});
    }

    const addAppointmentHandler = (appointment) => {
        dispatchUserAction({type: 'ADDAPPOINTMENT', appointment: appointment});
    }

    const removeAppointmentHandler = (id) => {
        dispatchUserAction({type: 'REMOVEAPPOINTMENT', id: id});
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