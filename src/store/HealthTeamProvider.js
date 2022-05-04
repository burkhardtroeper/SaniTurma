import { useReducer, useContext } from "react";

import HealthTeamContext from "./healthteam-context";
import UserContext from "../store/user-context";

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
        selected: false,
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
        selected: false,
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
        selected: false,
    }

]; 

let userCtx = null;

const defaultHealthTeamState = {
    healthWorkers: [],
    teamTypes: []
};

const healthTeamReducer = (state, action) => {

    if (action.type === 'GETTEAMBYDISEASE') {
        console.log('in HealthTeamProvider, getTeamByDisease');
        console.log('Disease: ' + action.disease);

        console.log(userCtx);
        
        const updatedHealthWorkers = healthWorkers.filter(healthWorker => healthWorker.diseases.includes(action.disease));

        const markSelectedHealthWorkers = updatedHealthWorkers.map((healthWorker) => {

            if (userCtx.team.includes(healthWorker.specialist)) {
                healthWorker.selected = true;
            }

            return healthWorker;

        });

        console.log('Mark selected list: ' + JSON.stringify(markSelectedHealthWorkers));

        console.log(updatedHealthWorkers);

        return {            
            healthWorkers: updatedHealthWorkers,
            teamTypes: state.teamTypes
        }

    }

    if (action.type === 'GETTEAMTYPES') {
        console.log('in HealthTeamProvider, getTeamTypes');
        console.log('Disease: ' + action.disease);

        let teamSpecialities = [];

        healthWorkers.filter((healthWorker) => {
            if (!teamSpecialities.includes(healthWorker.specialist)) {teamSpecialities.push(healthWorker.specialist)};
        });

        console.log('Updated TeamTypes: ' + teamSpecialities.length);

        return {
            healthWorkers: state.healthWorkers,
            teamTypes: teamSpecialities
        }

    }

    return defaultHealthTeamState;

}


const HealthTeamProvider = (props) => {

    userCtx = useContext(UserContext);
    
    const [healthTeamState, dispatchHealthTeamAction] = useReducer(healthTeamReducer, defaultHealthTeamState);

    const getTeamByDiseaseHandler = (disease) => {
        dispatchHealthTeamAction({type: 'GETTEAMBYDISEASE', disease: disease});
    }    

    const getTeamTypes = (disease) => {
        dispatchHealthTeamAction({type: 'GETTEAMTYPES', disease: disease});
    }
    
    const healthTeamContext = {

        healthWorkers: healthTeamState.healthWorkers,
        teamTypes: healthTeamState.teamTypes,
        getTeamByDisease: getTeamByDiseaseHandler,
        getTeamTypes: getTeamTypes

    };
    
    return (
        <HealthTeamContext.Provider value={healthTeamContext}>{props.children}</HealthTeamContext.Provider>
    );

}

export default HealthTeamProvider;