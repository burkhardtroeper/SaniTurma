import { useReducer } from "react";

import HealthTeamContext from "./healthteam-context";

const healthWorkers = [

    {
        id: 0, 
        name: 'Hans Meier',
        specialist: 'Internist',
        diseases: ['Diabetes'],
        street: 'Passauer Straße',
        streetNumber: 17,
        zip: 81369,
        city: 'München',
        tel: '0895236587',
        email: 'mail@info,de',
        website: 'www.info.de',
        lat: 50.680108,
        lng: 10.387152,
    },
    {
        id: 1,
        name: 'Birgitt Huber',
        specialist: 'Diabetes-Assistentin',
        diseases: ['Diabetes'],
        street: 'Berliner Straße',
        streetNumber: 55,
        zip: 80522,
        city: 'München',
        tel: '0898547896',
        email: 'mail@huber,de',
        website: 'www.huber.de',
        lat: 51.680108,
        lng: 9.387152,
    },
    {
        id: 2,
        name: 'Dirk Schmitz',
        specialist: 'Augenarzt',
        diseases: ['Diabetes'],
        street: 'Innsbrucker Ring',
        streetNumber: 125,
        zip: 81845,
        city: 'München',
        tel: '0891237854',
        email: 'mail@auge,de',
        website: 'www.auge.de',
        lat: 49.680108,
        lng: 11.387152,
    }

]; 

const defaultHealthTeamState = {
    healthWorkers: []
};

const healthTeamReducer = (state, action) => {

    if (action.type === 'GETTEAMBYDISEASE') {
        console.log('in HealthTeamProvider, getTeamByDisease');
        console.log('Disease: ' + action.disease);
        
        const updatedHealthWorkers = healthWorkers.filter(healthWorker => healthWorker.diseases.includes(action.disease));

        console.log(updatedHealthWorkers);

        return {            
            healthWorkers: updatedHealthWorkers,
            teamMembers: state.teamMembers
        }
    }

    return defaultHealthTeamState;

}


const HealthTeamProvider = (props) => {

    const [healthTeamState, dispatchHealthTeamAction] = useReducer(healthTeamReducer, defaultHealthTeamState);

    const getTeamByDiseaseHandler = (disease) => {
        dispatchHealthTeamAction({type: 'GETTEAMBYDISEASE', disease: disease});
    }    
    
    const healthTeamContext = {

        healthWorkers: healthTeamState.healthWorkers,
        getTeamByDisease: getTeamByDiseaseHandler,

    };
    
    return (
        <HealthTeamContext.Provider value={healthTeamContext}>{props.children}</HealthTeamContext.Provider>
    );

}

export default HealthTeamProvider;