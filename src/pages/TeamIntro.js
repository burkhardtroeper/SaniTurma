import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import DiseasesContext from "../store/diseases-context";
import UserContext from '../store/user-context';

const TeamIntro = () => {

    const diseases = useContext(DiseasesContext); 
    const user = useContext(UserContext);

    const history = useHistory();

    console.log('User :');
    console.log(JSON.stringify(user));

    const disease = diseases[user.diseaseSelected].name;

    return (
        <h1>Ihr Team {disease}</h1>
    )

}

export default TeamIntro;