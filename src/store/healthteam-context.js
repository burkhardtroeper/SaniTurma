import React from 'react';

const HealthTeamContext = React.createContext({

    healthWorkers: [],
    teamTypes: [],
    getTeamByDisease: (disease) => {},
    getTeamTypes: (disease) => {}
    
});

export default HealthTeamContext;

/*
teamMember-Class:

name:String
category:String
description:String
questions:[String]




*/