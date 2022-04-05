import React from 'react';

const HealthTeamContext = React.createContext({

    healthWorkers: [],
    getTeamByDisease: (disease) => {},
    
});

export default HealthTeamContext;

/*
teamMember-Class:

name:String
category:String
description:String
questions:[String]




*/