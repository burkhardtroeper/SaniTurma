import React from 'react';

const UserContext = React.createContext({

    diseaseSelected: 0, 
    team: [],
    notes: [],
    appointments: [],
    selectDisease: (number) => {},
    addTeamMember: (number) => {},
    removeTeamMember: (number) => {},
    addNote: (note) => {},
    removeNote: (noteNumber) => {},
    addAppointment: (appointment) => {},
    removeAppointment: (appointmentNumber) => {},

});

export default UserContext;