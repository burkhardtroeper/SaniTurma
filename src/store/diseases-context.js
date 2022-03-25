import React from 'react';

const DiseasesContext = React.createContext({

    key: 0, 
    name: '',
    questions: [],
    description: '',
    disabled: true,
    healthTeam: [],
    confirmMessage: '',

});

export default DiseasesContext;