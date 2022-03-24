//import { useReducer } from "react";
import DiseasesContext from "./diseases-context";

const defaultDiseasesState = [
    { key: 0, name: "Diabetes", disabled: false },
    { key: 1, name: "Bluthochdruck", disabled: true },
    { key: 2, name: "COPD", disabled: true },
];


const DiseasesProvider = (props) => {

    return (
        <DiseasesContext.Provider value={defaultDiseasesState}>{props.children}</DiseasesContext.Provider>
    )

}

export default DiseasesProvider