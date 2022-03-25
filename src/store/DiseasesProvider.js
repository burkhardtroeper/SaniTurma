//import { useReducer } from "react";
import DiseasesContext from "./diseases-context";

const defaultDiseasesState = [
    { key: 0, name: "Diabetes", questions: null, description: '', disabled: false, healthTeam: [0, 1, 2], confirmMessage: 'Diabetes ist also Ihr Thema. Alles klar. Eine komplexe Erkrankung, die aber gut behandelbar ist. Mit dem richtigen Team. Gehen wir es an ...', },
    { key: 1, name: "Bluthochdruck", questions: null, description: '', disabled: true, healthTeam: [], confirmMessage: '',},
    { key: 2, name: "COPD", questions: null, description: '', disabled: true, healthTeam: [], confirmMessage: '',},
];


const DiseasesProvider = (props) => {

    return (
        <DiseasesContext.Provider value={defaultDiseasesState}>{props.children}</DiseasesContext.Provider>
    )

}

export default DiseasesProvider