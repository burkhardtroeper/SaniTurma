import React from 'react';

const HealthTeamContext = React.createContext({

    healthWorkers: [],
    teamMembers: [],
    getTeamByDisease: (disease) => {},
    getTeamMember: (id) => {},
    addTeamMember: (id) => {},
    removeTeamMember: (id) => {},

});

export default HealthTeamContext;

/*
teamMember-Class:

name:String
category:String
description:String
questions:[String]




*/