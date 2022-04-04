import { useReducer } from "react";

import HealthTeamContext from "./healthteam-context";

const healthWorkers = [

    {
        id: 0, 
        name: 'Hans Meier',
        specialist: 'Internist',
        diseases: ['diabetes'],
        street: 'Passauer Straße',
        streetNumber: 17,
        zip: 81369,
        city: 'München',
        tel: '0895236587',
        email: 'mail@info,de',
        website: 'www.info.de'
    },
    {
        id: 1,
        name: 'Birgitt Huber',
        specialist: 'Diabetes-Assistentin',
        diseases: ['diabetes'],
        street: 'Berliner Straße',
        streetNumber: 55,
        zip: 80522,
        city: 'München',
        tel: '0898547896',
        email: 'mail@huber,de',
        website: 'www.huber.de'
    },
    {
        id: 2,
        name: 'Dirk Schmitz',
        specialist: 'Augenarzt',
        diseases: ['diabetes'],
        street: 'Innsbrucker Ring',
        streetNumber: 125,
        zip: 81845,
        city: 'München',
        tel: '0891237854',
        email: 'mail@auge,de',
        website: 'www.auge.de'
    }

]; 

const defaultHealthTeamState = [];

const healthTeamReducer = (state, action) => {

    if (action.type === 'GETTEAMBYDISEASE') {
        console.log('in HealthTeamProvider, getTeamByDisease');
        
        const updatedHealthWorkers = healthWorkers.map(healthWorker => {

            return healthWorker.diseases.includes(action.disease);

        });

        return {            
            healthWorkers: updatedHealthWorkers,
            teamMembers: state.teamMembers
        }
    }

    if (action.type === 'ADDTEAMMEMBER') {
        console.log('in HealthTeamProvider, addTeamMember');     

        const newTeamMember = healthWorkers.map(healthWorker => {

            return healthWorker.id === action.id;

        });   

        return {
            healthWorkers: state.healthWorkers,
            teamMembers: [...state.teamMembers, newTeamMember]
        }
    }

    if (action.type === 'REMOVETEAMMEMBER') {
        console.log('in HealthTeamProvider, removeTeamMember');     

        const toRemoveTeamMemberIndex = state.teamMembers.findIndex(teamMember => {

            return teamMember.id === action.id;

        });

        const updatedTeamMembers = state.teamMembers.slice(0, toRemoveTeamMemberIndex).concat(state.teamMembers.slice(toRemoveTeamMemberIndex + 1));

        return {
            healthWorkers: state.healthWorkers,
            teamMembers: updatedTeamMembers
        }
    }



}


const HealthTeamProvider = (props) => {

    const [healthTeamState, dispatchHealthTeamAction] = useReducer(healthTeamReducer, defaultHealthTeamState);

    const getTeamByDiseaseHandler = (disease) => {
        dispatchHealthTeamAction({type: 'GETTEAMBYDISEASE', disease: disease});
    }

    const getTeamMemberHandler = (id) => {               
        console.log('in HealthTeamProvider, getTeamMember');
        dispatchHealthTeamAction({type: 'GETTEAMMEMBER', teammember: id});
    }

    const addTeamMemberHandler = (id) => {               
        console.log('in HealthTeamProvider, getTeamMember');
        dispatchHealthTeamAction({type: 'ADDTEAMMEMBER', teammember: id});
    }

    const removeTeamMemberHandler = (id) => {               
        console.log('in HealthTeamProvider, getTeamMember');
        dispatchHealthTeamAction({type: 'REMOVETEAMMEMBER', teammember: id});
    }
    
    
    const healthTeamContext = {

        healthWorkers: healthTeamState.healthWorkers,
        teamMembers: healthTeamState.teamMembers,
        getTeamByDisease: getTeamByDiseaseHandler,
        getTeamMember: getTeamMemberHandler,
        addTeamMember: addTeamMemberHandler,
        removeTeamMember: removeTeamMemberHandler,

    };
    
    return (
        <HealthTeamContext.Provider value={healthTeamContext}>{props.children}</HealthTeamContext.Provider>
    );

}

export default HealthTeamProvider;